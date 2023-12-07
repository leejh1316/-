import { Contact } from "@/model/contact"
import { VisitEntity } from "@/model/visit"
import { defineStore } from "pinia"
import { reactive } from "vue"


  

const useVisitDummy = defineStore('visitDummy',()=>{
    const visit = reactive<VisitEntity[]>([
        {
          applicationId: 1,
          name: "홍길동",
          birthday: "1990-01-01",
          phoneNumber: "010-1234-5678",
          startDate: "2023-01-01",
          endDate: "2023-01-03",
          contactInfoId: 1,
          purpose: "업무 미팅",
          approvalStatus: '승인'
        },
        {
          applicationId: 2,
          name: "김영희",
          birthday: "1985-05-15",
          phoneNumber: "010-9876-5432",
          startDate: "2023-02-10",
          endDate: "2023-02-12",
          contactInfoId: 2,
          purpose: "프로젝트 협의",
          approvalStatus: '대기'
        },
        {
          applicationId: 3,
          name: "이철수",
          birthday: "1992-07-20",
          phoneNumber: "010-1111-2222",
          startDate: "2023-03-15",
          endDate: "2023-03-17",
          contactInfoId: 3,
          purpose: "강연",
          approvalStatus: '반려'
        },
        {
          applicationId: 4,
          name: "박지민",
          birthday: "1994-04-10",
          phoneNumber: "010-3333-4444",
          startDate: "2023-04-20",
          endDate: "2023-04-22",
          contactInfoId: 4,
          purpose: "인터뷰",
          approvalStatus: '승인'
        },
        {
          applicationId: 5,
          name: "최수진",
          birthday: "1989-09-09",
          phoneNumber: "010-5555-6666",
          startDate: "2023-05-25",
          endDate: "2023-05-27",
          contactInfoId: 5,
          purpose: "기술 데모",
          approvalStatus: '대기'
        },
        {
          applicationId: 6,
          name: "정민호",
          birthday: "1991-12-12",
          phoneNumber: "010-7777-8888",
          startDate: "2023-06-10",
          endDate: "2023-06-12",
          contactInfoId: 1,
          purpose: "사업 협력 논의",
          approvalStatus: '승인'
        }
      ]) 
    return {visit}
})

export default useVisitDummy