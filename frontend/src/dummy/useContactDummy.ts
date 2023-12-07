import { Contact } from "@/model/contact";
import { defineStore } from "pinia";
import { reactive } from "vue";

const useContactDummy = defineStore("contactDummy", () => {
  const contact = reactive<Contact[]>([
    {
      contactInfoId: 1,
      name: "홍길동",
      department: "마케팅",
    },
    {
      contactInfoId: 2,
      name: "김영희",
      department: "개발",
    },
    {
      contactInfoId: 3,
      name: "이철수",
      department: "인사",
    },
    {
      contactInfoId: 4,
      name: "박지민",
      department: "디자인",
    },
    {
      contactInfoId: 5,
      name: "최수진",
      department: "영업",
    },
  ]);
  return {contact};
});

export default useContactDummy;
