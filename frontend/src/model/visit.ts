// CREATE TABLE "VISIT_APPLICATIONS" (
// 	"APPLICATION_ID"	INTEGER NOT NULL,
// 	"NAME"	TEXT NOT NULL,
// 	"BIRTHDAY"	TEXT,
// 	"PHONE_NUMBER"	TEXT NOT NULL,
// 	"START_DATE"	TEXT NOT NULL,
// 	"END_DATE"	TEXT NOT NULL,
// 	"CONTACT_INFO_ID"	INTEGER,
// 	"PURPOSE"	TEXT,
// 	"APPROVAL_STATUS"	TEXT NOT NULL,
// 	PRIMARY KEY("APPLICATION_ID" AUTOINCREMENT)
// )

export interface VisitEntity{
    applicationId:number;
    name:string;
    birthday:string;
    phoneNumber:string;
    startDate:string;
    endDate:string;
    contactInfoId:number;
    purpose:string;
    approvalStatus:VisitApproval
}


export interface VisitForm {
    name : string;
    birthday?:string;
    phoneNumber:string;
    startDate:string;
    endDate:string;
    purpose:string;
    contactInfoId:number;
}

export interface VisitCheck{
    name: string;
    phoneNumber:string;
}

export interface VisitInformation{
    name : string;
    phoneNumber:string;
    startDate:string;
    endDate:string;
    approvalStatus:VisitApproval
}

export type VisitApproval = '승인' | '반려' | '대기'

