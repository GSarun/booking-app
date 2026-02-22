import{$b as n,I as a,M as i}from"./chunk-CUYI2575.js";var r=class s{constructor(e){this.supabaseService=e;this.supabase=this.supabaseService.supabase}supabase;async getAvailableSchedules(){let e=new Date().toISOString();return this.supabase.from("schedules").select(`
        *,
        subjects (id, title, image_url, description),
        classrooms (name, capacity, seat_layout),
        bookings (count)
      `).gt("end_booking",e).neq("bookings.status","cancelled").neq("bookings.status","rejected").neq("bookings.seat_number","ONLINE").order("start_booking",{ascending:!0})}async getAllSchedules(){return this.supabase.from("schedules").select(`
        *,
        subjects (id, title, image_url, description),
        classrooms (name, capacity, seat_layout),
        bookings (status)
      `).order("start_booking",{ascending:!1})}async getScheduleById(e){return this.supabase.from("schedules").select(`
        *,
        subjects (title, description, image_url),
        classrooms (name, capacity, seat_layout)
      `).eq("id",e).single()}async createSchedule(e){return this.supabase.from("schedules").insert(e).select().single()}async updateSchedule(e,t){return this.supabase.from("schedules").update(t).eq("id",e).select().single()}async deleteSchedule(e){return this.supabase.from("schedules").delete().eq("id",e)}static \u0275fac=function(t){return new(t||s)(i(n))};static \u0275prov=a({token:s,factory:s.\u0275fac,providedIn:"root"})};export{r as a};
