import User from "../models/user";


export const getAllNotifications= async (userId:string)=>{
  const result = await User.findById(userId)
                    .select("notification");
  return result;
}

export const getAllNotificationsById= async (userId:string,notId: number)=>{
  const result = await User.findById(userId)
                    .select("notifications").find((e)=> e.id === notId);
  return result;
}
