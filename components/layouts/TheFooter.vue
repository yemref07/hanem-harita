<template>
  <div class="bg-dark w-full py-20 footer">
    <Container>
      <div class="grid lg:grid-cols-12 gap-4 xl:gap-12 ">
        <div class="col-span-3 font-poppins text-tlight2">
          <NuxtImg
            src="/images/logo/hanem-logo-white.png"
            sizes="120px md:150px"
            class="mb-8"
            preload
          />
          <p class='text-sm md:text-base'>
            Haritacalık hizmetlerinden, Emlak danışmanlığına birçok taşınmaz ihtiyacınız için güvenilir adres.
          </p>

          
        </div>

        <div class="col-span-3">
          <h2 class="mb-8 xl:text-2xl font-semibold font-spartan text-tlight">
            Hizmetlerimiz
          </h2>
          <ul>
            <li class="text-tlight2 font-poppins text-base mb-4">
              <nuxt-link :to="localePath('/')">
                <Icon
                  name="icon-park-outline:land-surveying"
                  width="14"
                  height="14"
                  class="text-secondary cursor-pointer mr-2 align-middle"
                />
                Lorem ipsum dolor sit.
              </nuxt-link>
            </li>
            <li class="text-tlight2 font-poppins text-base mb-4">
              <nuxt-link :to="localePath('/')">
                <Icon
                  name="icon-park-outline:land-surveying"
                  width="14"
                  height="14"
                  class="text-secondary cursor-pointer mr-2 align-middle"
                />
                Lorem ipsum dolor sit.
              </nuxt-link>
            </li>
            <li class="text-tlight2 font-poppins text-base mb-4">
              <nuxt-link :to="localePath('/')">
                <Icon
                  name="icon-park-outline:land-surveying"
                  width="14"
                  height="14"
                  class="text-secondary cursor-pointer mr-2 align-middle"
                />
                Lorem ipsum dolor sit.
              </nuxt-link>
            </li>
            <li class="text-tlight2 font-poppins text-base mb-4">
              <nuxt-link :to="localePath('/')">
                <Icon
                  name="icon-park-outline:land-surveying"
                  width="14"
                  height="14"
                  class="text-secondary cursor-pointer mr-2 align-middle"
                />
                Lorem ipsum dolor sit.
              </nuxt-link>
            </li>
            <li class="text-tlight2 font-poppins text-base mb-4">
              <nuxt-link :to="localePath('/')">
                <Icon
                  name="icon-park-outline:land-surveying"
                  width="14"
                  height="14"
                  class="text-secondary cursor-pointer mr-2 align-middle"
                />
                Lorem ipsum dolor sit.
              </nuxt-link>
            </li>
            <li class="text-tlight2 font-poppins text-base mb-4">
              <nuxt-link :to="localePath('/')">
                <Icon
                  name="icon-park-outline:land-surveying"
                  width="14"
                  height="14"
                  class="text-secondary cursor-pointer mr-2 align-middle"
                />
                Lorem ipsum dolor sit.
              </nuxt-link>
            </li>
  
  
          </ul>
        </div>

        <div class="col-span-3">
          <h2 class="mb-8 xl:text-2xl font-semibold font-spartan text-tlight">
            Bağlantılar
          </h2>
            <ul>
                <li class="text-tlight2 font-poppins text-base mb-4">
                    <nuxt-link :to="localePath('/')" title="Kumluca Hanem Harita">
                        {{ $t('home') }}
                    </nuxt-link>
                </li>
                <li class="text-tlight2 font-poppins text-base mb-4">
                    <nuxt-link :to="localePath('/hakkimizda')" title="Kumluca Hanem Harita Hakkımızda">
                      {{ $t('about') }}
                    </nuxt-link>
                </li>
                <li class="text-tlight2 font-poppins text-base mb-4">
                    <nuxt-link :to="localePath('/hizmetlerimiz')" title="Kumluca Hanem Harita Hizmetlerimiz">
                      {{ $t('services') }}
                    </nuxt-link>
                </li>
                <li class="text-tlight2 font-poppins text-base mb-4">
                    <nuxt-link :to="localePath('/ilanlar')" title="Kumluca Hanem Harita İlanlar">
                      {{ $t('advertisement') }}
                    </nuxt-link>
                </li>
                <li class="text-tlight2 font-poppins text-base mb-4">
                    <nuxt-link :to="localePath('/')" title="Kumluca Hanem Harita Blog">
                      {{ $t('blog') }}
                    </nuxt-link>
                </li>
                <li class="text-tlight2 font-poppins text-base mb-4">
                    <nuxt-link :to="localePath('/')" title="Kumluca Hanem Harita İletişim">
                      {{ $t('contact') }}
                    </nuxt-link>
                </li>
            </ul> 
        </div>

        <div class="col-span-3">
            <h2 class="mb-8 xl:text-2xl font-semibold font-spartan text-tlight">
                İletişim
            </h2>
            <nuxt-link to="" class="mt-6 block text-sm text-tlight2 font-poppins cursor-pointer">
            <Icon
              name="iconamoon:location-pin"
              width="24"
              height="24"
              class="text-secondary cursor-pointer mr-3"
            />
            <span class="mr-2">Adres :</span> Lorem ipsum dolor sit amet.
          </nuxt-link to="">

          <nuxt-link to="" class="block my-2 text-sm text-tlight2 font-poppins cursor-pointer">
            <Icon
              name="lets-icons:phone-duotone"
              width="24"
              height="24"
              class="text-secondary cursor-pointer mr-3"
            />
            <span class="mr-2">Telefon:</span> +90 534 499 76 52
          </nuxt-link to="">

          <nuxt-link to="" class='block text-sm text-tlight2 font-poppins cursor-pointer'>
            <Icon
              name="iconamoon:email-light"
              width="24"
              height="24"
              class="text-secondary cursor-pointe mr-3"
            />
            <span>Email:</span> info@email.com
          </nuxt-link to="">

          <div class='flex mt-6 justify-start items-center'>
            <nuxt-link to="" class='cursor-pointer'>
                <Icon
                  name="ri:twitter-x-line"
                  width="20"
                  height="20"
                  class="cursor-pointe mr-3 text-tlight"
                />

            </nuxt-link>
            
            <nuxt-link to="" class='cursor-pointer'>
                <Icon
                  name="iconoir:facebook"
                  width="24"
                  height="24"
                  class="cursor-pointe mr-3 text-tlight"
                />   
                
            </nuxt-link>


            <nuxt-link to="" class='cursor-pointer'>
                <Icon
                  name="iconoir:instagram"
                  width="24"
                  height="24"
                  class="cursor-pointe mr-3 text-tlight"
                />   
                
            </nuxt-link>


            <nuxt-link to="" class='cursor-pointer'>
                <Icon
                  name="iconoir:linkedin"
                  width="24"
                  height="24"
                  class="cursor-pointe mr-3 text-tlight"
                />   
                
            </nuxt-link>
          </div>
        </div>

      </div>
    </Container>

    <Container class="copyright-area mt-8">
      <div class="flex flex-row justify-center items-center text-tlight mt-8">
        <p class='text-sm font-poppins'>
            Copyright 2024 
            <span class='text-secondary mx-2'>Hanem Harita</span> 
            Developed By 
            <span class='text-primary'>Yemref</span>
        </p>
      </div>
    </Container>

  </div>
</template>

<script setup>
import Container from "../UI/Container.vue";
//i18N init
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
</script>

<style lang="scss" scoped>

.copyright-area {
    border-top: 1px solid #1f2020;
}

.footer a:hover{
  color:$color-primary;
}
</style>
