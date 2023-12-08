import { AdminEntity } from "@/model/admin";
import { Contact } from "@/model/contact";
import { defineStore } from "pinia";
import { reactive } from "vue";

const useAdminDummy = defineStore("adminDummy", () => {
    const admin = reactive<AdminEntity[]>([
        {
            adminId: 1,
            id: 'admin',
            password: '1234'
        }
    ])
    const currentAdmin = reactive<AdminEntity>({} as AdminEntity)
  return {admin,currentAdmin};
});

export default useAdminDummy;
