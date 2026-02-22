import{a as o}from"./chunk-SWELJ4UV.js";import{$b as n,I as a,M as t}from"./chunk-CUYI2575.js";var c=class r{constructor(e,s){this.supabaseService=e;this.authService=s;this.supabase=this.supabaseService.supabase}supabase;async getBookingsBySchedule(e){return this.supabase.from("bookings").select(`
                *,
                profiles (
                    display_name,
                    username,
                    phone
                )
            `).eq("schedule_id",e).neq("status","rejected")}async getMyBookings(){let e=this.authService.currentUser();return e?this.supabase.from("bookings").select(`
        *,
        schedules (
          start_booking,
          end_booking,
          subjects (title, description, image_url),
          classrooms (name)
        )
      `).eq("user_id",e.id).order("created_at",{ascending:!1}):{data:[],error:"Not logged in"}}async createBooking(e,s){let i=this.authService.currentUser();if(!i)throw new Error("You must be logged in to book.");return this.supabase.from("bookings").insert({schedule_id:e,user_id:i.id,seat_number:s}).select().single()}async createBookingForUser(e,s,i){return this.supabase.from("bookings").insert({schedule_id:e,user_id:i,seat_number:s,status:"confirmed"}).select().single()}async cancelBooking(e){return this.supabase.from("bookings").delete().eq("id",e)}async updateBookingStatus(e,s){return this.supabase.from("bookings").update({status:s}).eq("id",e)}subscribeToSchedule(e,s){return this.supabase.channel(`public:bookings:schedule_id=eq.${e}`).on("postgres_changes",{event:"*",schema:"public",table:"bookings",filter:`schedule_id=eq.${e}`},i=>{s()}).on("postgres_changes",{event:"*",schema:"public",table:"schedules",filter:`id=eq.${e}`},i=>{s()}).subscribe()}subscribeToMyBookings(e,s){return this.supabase.channel(`my-bookings-${e}`).on("postgres_changes",{event:"*",schema:"public",table:"bookings"},i=>{s()}).subscribe(i=>{})}static \u0275fac=function(s){return new(s||r)(t(n),t(o))};static \u0275prov=a({token:r,factory:r.\u0275fac,providedIn:"root"})};export{c as a};
