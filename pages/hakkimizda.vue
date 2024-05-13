<template>
    <BreadCrumb title='Hakkımızda' />
    <Container class='py-12'>
        <div class="grid lg:grid-cols-2 justify-center items-start gap-12 xl:gap-24">

            <div class="col-span-1 relative">
                <NuxtImg src = "/images/about.jpg" loading="lazy" alt="about" width="400" sizes="sm:300px md:600px lg:900px" class="rounded-r-xl lg:ml-auto" />
                <div class="skill-tag md:block hidden">
                    <span class="text-center text-xl font-poppins">
                        Uzman Kadro
                    </span>
                </div>
            </div>

            <div class="col-span-1 text-body">
                <div class="pl-5">
                    <h2 class='text-heading font-spartan text-3xl font-semibold'>Hakkımızda</h2>
                    <h3 class='text-primary font-spartan text-xl font-semibold mt-1'>Hanem Harita</h3>
                </div>
                <br>
                <div class="border-l-4 border-teal-200 pl-5 py-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore rem alias velit modi voluptatibus, optio tempore impedit autem ad inventore architecto reiciendis non dolores labore hic sequi ducimus minimao?</p>
                    <br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore rem alias velit modi voluptatibus, optio tempore impedit autem ad inventore architecto reiciendis non dolores labore hic sequi ducimus minimao?</p>
                    <br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore rem alias velit modi voluptatibus, optio tempore impedit autem ad inventore architecto reiciendis non dolores labore hic sequi ducimus minimao?</p>
                    <br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore rem alias velit modi voluptatibus, optio tempore impedit autem ad inventore architecto reiciendis non dolores labore hic sequi ducimus minimao?</p>
                </div>
                <BtnPrimary size="large" class='mt-5 inline-block' link="iletisim">Detaylı Bilg Al</BtnPrimary>
            </div>

        </div>
    </Container>

    <Container class='py-12'>
        <div class="mb-12">
            <h2 class='text-heading font-spartan text-3xl font-semibold text-center'>Uzman Kadromuz</h2>
            <h3 class='text-primary font-spartan text-xl font-semibold text-center mt-1'>Hanem Harita</h3>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </div>
    </Container>
</template>

<script setup>
import BreadCrumb from '~/components/UI/BreadCrumb.vue';
import Container from '~/components/UI/Container.vue';
import BtnPrimary from '~/components/buttons/BtnPrimary.vue';
import EmployeeCard from '~/components/cards/EmployeeCard.vue';

</script>

<style lang="scss" scoped>
 .skill-tag {
    position: absolute;
    content: '';
    right: -50px;
    top: 50%;
    width: 150px;
    height: 150px;
    transform: translateY(-50%);
    border: 5px solid #ffffff;
    font-size: 16px;
    padding: 46px 20px;
    line-height: 24px;
    border-radius: 100%;
    text-align: center;
    background: $color-secondary;
    color: #ffffff;
    font-weight: 600;
}
</style>