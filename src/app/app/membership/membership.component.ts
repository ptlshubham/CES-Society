import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { Employee } from 'app/employee/employee.model';
import { EmployeeService } from 'app/employee/employee.service';
import { Services } from 'app/services/services.model';
import { ServicesService } from 'app/services/services.service';
import { Appointment } from './membershipappointment.model';
import { Membership } from './membership.model';
import { MembershipService } from './membership.service';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Swal from 'sweetalert2';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  public membershipModel: Membership = new Membership;
  public appointmentModel: Appointment = new Appointment
  public appointment: Appointment[];
  public appointmentList: Appointment[];
  public membership: Membership[] = [];
  disc: number;
  public membershipList: Membership[];
  selectedEmp: any;
  empId: any;
  selectedServ: any;
  servId: any;
  public employeeReg: Employee[];
  public servicesList: Services[];
  serviceData: any = [];
  search: string = '';
  totalprice: any = 0;
  finalprice: number = 0;
  totalPoint: any = 0;
  quantity: number;
  totalMembershipPoint: any = 0;
  totalTime: any = 0;
  custAppointment: boolean = true;
  selectMembership: boolean = false;
  viewMembershipAllData: boolean = false;
  selectedCustId: any;
  totalCustPoint: any[];
  tCustPoint: any = 0;
  membershipData: any[];
  membershipname: string;
  membershipprice: number = 0;
  usedServices: any[];
  usedPrices: any[];
  totalRecords: string;
  totalModelRecords: string;
  page: Number = 1;
  modelPage: number = 1;
  totalPriceForDetails: any;
  totalPointForDetails: any;
  finalPriceForDetails: any;
  addService: any = [];
  valu: 0;
  isDashboard: boolean = false;
   percentage: number = 0;
  constructor(
    private servicesService: ServicesService,
    private employeeService: EmployeeService,
    private membershipService: MembershipService,
    private apiService: ApiService,
    private router: Router
  ) {

    this.getAllEmployee();
    this.getAllServices();
    this.getMembershipDetails();
    if (this.router.routerState.snapshot.url === '/dashboard') {
      this.isDashboard = true;
    }
  }

  ngOnInit(): void {
    this.addService = [{ sertime: null, serpoint: null, serprice: null, name1: this.valu, selectedServ: '', selectedEmp: '', selectedServid: null, selectedEmpid: null }]
    this.valu++;
  }
  addServiceList() {

    this.valu++;
    this.addService.push({ sertime: null, serpoint: null, serprice: null, name1: this.valu, selectedServ: '', selectedEmp: '', selectedServid: null, selectedEmpid: null });
  }
  removeServiceList(valu) {
    this.addService.splice(valu, 1);
    this.addPoinInList();
  }

  getAllEmployee() {
    this.employeeService.getAllEmployeeList().subscribe((data: any) => {
      this.employeeReg = data;
    });
  }
  getAllServices() {
    this.servicesService.getAllServicesList().subscribe((data: any) => {
      this.servicesList = data;
    });
  }
  selectServiceList(id, ind) {

    this.servId = id;

    this.servicesList.forEach(element => {
      if (element.id == id) {
        this.addService[ind].selectedServ = element.name;
        this.addService[ind].selectedServid = id;
        this.addService[ind].serprice = element.price;
        this.addService[ind].serpoint = element.point;
        this.addService[ind].sertime = element.time;
        this.addPoinInList();

      }

    })
  }
  addPoinInList() {
    this.totalPoint = 0;
    this.totalprice = 0;
    this.totalTime = 0;
    debugger
    this.addService.forEach(element => {
      if (element.serprice != undefined) {
        this.totalprice = this.totalprice + element.serprice;
      }
      if (element.serpoint != undefined) {
        this.totalPoint = this.totalPoint + element.serpoint;
      }
      if (element.sertime != undefined) {
        this.totalTime = this.totalTime + element.sertime;
      }
      this.disc = this.membershipModel.percentage;
      this.quantity = this.membershipModel.quantity;
      this.getMembershipVal();
      this.finalmembershipprice();
    });
  }

  removeItem(i) {
    this.addService.splice(i, 1);
    this.addPoinInList();
  }

  saveMembershipDetail(data) {
    
    this.membershipModel.totalprice = this.totalprice;
    this.membershipModel.finalprice = this.finalprice;
    this.membershipModel.membershipprice = this.membershipprice;
    var discount: number = +this.disc;
    this.membershipModel.percentage = discount;
    this.membershipModel.services=this.addService;
    debugger
    this.membershipService.saveMembershipList(this.membershipModel).subscribe((data: any) => {
      this.membershipList = data;
      debugger
      this.apiService.showNotification('top', 'right', 'Membership Added Successfully.', 'success');
      this.getMembershipDetails();
      location.reload();
    })
  }
finalmembershipprice() {
  debugger
  this.finalprice = Number(this.quantity) * this.totalprice;
}

  getMembershipDetails() {

    this.membershipService.getAllMembershipList().subscribe((data: any) => {
      this.membershipList = data;
      this.membership = data;
      for (let i = 0; i < this.membership.length; i++) {
        this.membership[i].index = i + 1;
      }
    });
  }
  getMembershipVal() {
    debugger
    this.membershipprice = this.totalprice - (this.totalprice * (this.disc / 100));
  }
  searchMembershipList(val) {
    if (this.search == '') {
      this.membership = this.membershipList;
    } else {
      this.transform(this.membershipList, val);
    }
  }
  transform(membership: Membership[], searchValue: string) {

    this.membership = [];
    membership.forEach(element => {
      if (element.contact.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.membership.push(element);
      }
      else if (element.fname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.membership.push(element);
      }
      else if (element.lname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.membership.push(element);
      }
    })
  }
  backToMembership() {
    this.custAppointment = true;
    this.selectMembership = false;
    this.viewMembershipAllData=false;
  }
  getMembershipPoints() {
    this.membershipService.getCustAllPoint(this.selectedCustId).subscribe((data: any) => {
      this.totalCustPoint = data;
      this.tCustPoint = 0;
      this.totalCustPoint.forEach(element => {
        if (element.totalcustpoint != undefined) {
          this.tCustPoint = element.totalcustpoint;
        }
      });
    });
  }
  seletedMembershipDetails(data) {
    this.membershipModel = data;
    this.selectMembership = true;
    this.getMembershipPoints();
  }
  saveAppointmentDetails() {

    this.appointmentModel.lessPoints = 0;
    this.appointmentModel.totalpoint = this.totalPoint;
    this.appointmentModel.lessPoints = this.tCustPoint - this.appointmentModel.percentage;
    this.appointmentModel.lessPoints = this.appointmentModel.lessPoints + this.appointmentModel.totalpoint;
    this.appointmentModel.selectedService = this.addService;
    this.appointmentModel.membershipprice = this.membershipprice;
    this.appointmentModel.membershipname = this.membershipname;
    this.appointmentModel.totalpoint = this.totalPoint;
    this.appointmentModel.isactive = true;
    if (this.appointmentModel.percentage > this.appointmentModel.tCustPoint) {
      this.apiService.showNotification('top', 'right', 'You can not redeem point more than total point.', 'danger');
    }
    else {
      this.membershipService.saveAppointmentList(this.appointmentModel).subscribe((data: any) => {
        this.appointment = data;
        this.router.navigate(['dashboard']);
        location.reload();
        this.apiService.showNotification('top', 'right', 'Appointment Successfully Booked.', 'success');
      })
    }

  }
  generateInvoicePDF(action = 'open') {

    let docDefinition = {
      content: [
        {
          image: 'testImage'
        },

        {
          text: 'Angrez The Salon',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'INVOICE',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: '#ef8157'
        }, {}, {}, {},
        {
          text: 'Membership Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: this.membershipModel.fname + '' + this.membershipModel.lname,
                bold: true
              },           
            ],
            [    
              {
                text: `Bill No : ${((Math.random() * 1000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        }, {}, {},
        {
          text: 'Service Details',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto'],
            body: [
              ['Service', 'Price', 'Amount'],

              
            ]
          }
        },
        {
          columns: [
         
            [{ text: 'Signature', alignment: 'right', italics: true }],
          ]
        },
        {
          ul: [
            'Order can be return in max 10 days.',
            'Warrenty of the product will be subject to the manufacturer terms and conditions.',
            'This is system generated invoice.',
          ],
        },
      ]
    };
    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download();
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition).print();
    } else {
      pdfMake.createPdf(docDefinition).open();
    }
  }
  viewMembershipDetails(data) {
    this.totalMembershipPoint = 0;
    this.membershipModel = data;
    this.membershipService.getViewAppointment(data).subscribe((data1: any) => {
      this.appointment = data1;
      this.appointment.forEach(element => {
        if (element.totalpoint != undefined) {
          this.totalMembershipPoint = this.totalMembershipPoint + element.totalpoint;
        }
      });
    });
  }
  updateMembershipDetails() {
    this.membershipService.updateMembershipList(this.membershipModel).subscribe((req) => {
      this.getMembershipDetails();
      this.apiService.showNotification('top', 'right', 'Membership Details Successfully Updated.', 'success');
    })
  }
  removeMembershipList(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete! If you delete Membership then all the membership data will be delete.",
      icon: 'warning',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      confirmButtonText: 'Yes',
      buttonsStyling: false
    }).then((result) => {
      if (result.value == true) {
        this.membershipService.removeMembershipDetails(id).subscribe((req) => {
          this.apiService.showNotification('top', 'right', 'Membership removed Successfully.', 'success');

        })
        Swal.fire(
          {
            title: 'Deleted!',
            text: 'Your Membership has been deleted.',
            icon: 'success',
            customClass: {
              confirmButton: "btn btn-success",
            },
            buttonsStyling: false
          }
        )
        this.getMembershipDetails();
      }
    })

  }
  onlyViewMembershipDetails(id) {
    this.selectMembership = true;
    this.custAppointment = false;
    this.viewMembershipAllData = true;
    this.membershipService.getAllMembershipDataList(id).subscribe((data: any) => {
      this.membershipData = data;

      for (let i = 0; i < this.membershipData.length; i++) {
        this.membershipData[i].index = i + 1;
      }
    });
  }
  backToList() {
    this.selectMembership = false;
    this.custAppointment = false;
    this.viewMembershipAllData = false;
  }
  openUsedServiceList(obj) {

    this.totalPriceForDetails = obj.totalprice
    this.totalPointForDetails = obj.totalpoint
    this.finalPriceForDetails = obj.finalprice

    this.membershipService.getServicesListUsingId(obj.id).subscribe((data: any) => {
      this.usedServices = data;
      this.usedPrices = data;


      for (let i = 0; i < this.usedServices.length; i++) {
        this.usedServices[i].index = i + 1;

      }
      for (let i = 0; i < this.usedPrices.length; i++) {
        this.usedServices[i].index = i + 1;

      }
    });
  }

}