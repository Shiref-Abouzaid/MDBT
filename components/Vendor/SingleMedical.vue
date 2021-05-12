<template>
    <div class="medical-card">
        <div class="card">
            <div class="card-hover">
                <div class="card-img">
                    <img src="/images/meal.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <div class="card-head">
                        <h5 class="card-title">Tom Hanks</h5>
                        <span class="price">$20.00</span>
                    </div>
                    <div class="desc">
                        <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                        <div class="rate-box">
                            <span>5.0</span>
                            <img src="/images/icons/svg/vendor-star.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="actions">
                <div class="row no-gutters">
                    <div class="col add-cart-btn">
                        <span>{{ $t("medical_service.details_button") }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>