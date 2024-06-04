<template>
   <div class="">
     <BreadCrumb title="İletişim"/>
     <Container class=" py-10 lg:py-20">
       <div class="grid md:grid-cols-2 md:gap-8">
         <div class="col-span-1">
           <div class="flex flex-col justify-center items-center">
             <NuxtImg
               class="md:w-2/3 md:h-auto hidden md:block rounded-md"
               src="/images/contact2.jpg"
               loading="lazy"
               alt="shape1"
               sizes="300px sm:600px md:900px"
             />
           </div>
         </div>
   
         <div class="col-span-1">
           <div class="flex flex-col gap-6">
             <h2 class="text-3xl font-spartan font-semibold">Hanem Harita Emlak</h2>
   
             <div class="">
               <h3 class="text-xl font-poppins mb-1">Adres</h3>
               <nuxt-link class="cursor-pointer text-body" to="https://www.google.com.tr/maps/dir//36.3668,30.2931152/@36.3669721,30.2928249,17.75z?hl=tr&entry=ttu"
                 >Naranciye Mah Evran Sok B Blok No:11 - Kumluca / Antalya</nuxt-link
               >
             </div>
   
             <div class="">
               <h3 class="text-xl font-poppins mb-1">E-Posta</h3>
               <nuxt-link class="cursor-pointer text-body" to="emailto:hanemharitaemlak@hotmail.com"
                 >hanemharitaemlak@hotmail.com</nuxt-link
               >
             </div>
   
             <div class="">
               <h3 class="text-xl font-poppins mb-1 gap">Telefon</h3>
               <nuxt-link class="cursor-pointer text-body block" to="tel:"
                 >+90 535 870 39 00</nuxt-link
               >
               <nuxt-link class="cursor-pointer text-body block my-1" to="tel:"
                 >+90 533 242 84 57</nuxt-link
               >
               <nuxt-link class="cursor-pointer text-body block" to="tel:"
                 >+90 533 476 85 80</nuxt-link
               >
             </div>
   
             <div class="flex gap-3">
               <nuxt-link to="https://www.facebook.com/share/6YvVzVpV2uzoCXrP/?mibextid=qi2Omg" target="_blank">
                   <Icon
                     name="entypo-social:facebook-with-circle"
                     width="40"
                     height="40"
                     class="text-primary cursor-pointer"
                   />
   
               </nuxt-link>
   
               <nuxt-link>
                   <Icon
                     name="entypo-social:linkedin-with-circle"
                     width="40"
                     height="40"
                     class="text-primary cursor-pointer"
                   />
   
               </nuxt-link>
   
               <nuxt-link to="https://www.instagram.com/hanemharitaemlak07?igsh=MTB0YTI0d29jdWQ0bw==" target="_blank">
                   <Icon
                     name="entypo-social:instagram-with-circle"
                     width="40"
                     height="40"
                     class="text-primary cursor-pointer"
                   />
   
               </nuxt-link>
   
             </div>
           </div>
         </div>
       </div>
     </Container>
   
     <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1605.4433411716916!2d30.291424238347474!3d36.36728738565797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNarenciye%20Mahallesi%20Evren%20Sokak%20B%20Blok%20No%2011!5e0!3m2!1str!2str!4v1717529668318!5m2!1str!2str" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

   </div>
</template>

<script setup>
import Container from "~/components/UI/Container.vue";
import BreadCrumb from "~/components/UI/BreadCrumb.vue";
</script>

<style lang="scss" scoped></style>
