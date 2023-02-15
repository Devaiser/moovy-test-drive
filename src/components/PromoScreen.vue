<template>
  <div class="promo-section">
    <vue3-flip-countdown
      :deadlineDate="deadline"
      mainColor="#21E7D6"
      :showLabels="false"
    />
    <h2 class="subtitle">
      join the whitelist to get access to an early version of the app
    </h2>
    <div class="promo-list">
      <div class="promo-item">
        <div class="promo-img car">
          <img src="/img/no-image-auto.png" alt="no-image-auto" class="image" />
        </div>
        <div class="promo-item-body big">
          <span class="promo-item-text">
            With Classic Moovy Box you will get your first NFT car in the Moovy
            metaverse
          </span>
          <div class="promo-item-badge">
            <span
              >free <br />
              nft car <br />
              for app test</span
            >
          </div>
        </div>
      </div>
      <div class="promo-item">
        <div class="promo-img number">
          <img src="/img/number.png" alt="numberplate" class="image" />
        </div>
        <div class="promo-item-body small">
          <span class="promo-item-text">
            To drive a Moovy car, you need to get a license plate and driving
            licence
          </span>
          <div class="promo-item-badge">
            <span
              >moovy <br />
              license and <br />
              numberplates</span
            >
          </div>
        </div>
      </div>
      <div class="promo-item">
        <div class="promo-img phone">
          <img src="/img/phone.png" alt="phone" class="image" />
        </div>
        <div class="promo-item-body big">
          <span class="promo-item-text">
            And early access to the application is guaranteed by your personal
            ticket to the alpha version
          </span>
          <div class="promo-item-badge">
            <span
              >access <br />
              to the moovy <br />
              drive2earn</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="promo-button">
      <Button @click="onSubmit" />
    </div>
  </div>
</template>
<script setup>
import { Button } from '@/components';
const emit = defineEmits(['submit']);

const deadline = new Date(
  'Fri Feb 27 2023 03:00:00 GMT+0300 (Москва, стандартное время)'
);

const onSubmit = () => {
  emit('submit');
};
</script>
<style scoped>
.subtitle {
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
  margin-top: 30px;
}
.promo-list {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.promo-item {
  position: relative;
}
.promo-item:not(:last-child) {
  margin-right: 20px;
}
.promo-item-body {
  padding: 0 40px;
  background: linear-gradient(0deg, #161616 0%, rgba(22, 22, 22, 0) 110.13%);
  border-radius: 40px;
  border: 1px solid #fff;
  border-bottom: none;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 0;
  height: 260px;
}
.promo-item-body.big {
  width: 470px;
}
.promo-item-body.small {
  width: 342px;
}
.promo-item-badge {
  position: absolute;
  top: 0px;
  left: 50%;
  border: 1px solid #fff;
  border-bottom: none;
  transform: translateX(-50%);
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(78, 78, 78, 0.7) 0%,
    rgba(235, 235, 235, 0) 140%
  );
  border-radius: 20px;
  width: 156px;
  height: 130px;
  filter: drop-shadow(0px 3.60748px 18.0374px rgba(0, 0, 0, 0.5));
  padding: 10px;
  padding-bottom: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
}
.promo-item-badge span {
  text-transform: uppercase;
  color: #fff;
  mix-blend-mode: normal;
  text-shadow: 0.939736px 0.939736px 1.87947px rgba(255, 255, 255, 0.3),
    -0.939736px -0.939736px 1.87947px rgba(102, 102, 102, 0.5);
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
}
.promo-img {
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.promo-img.car {
  width: 80%;
  top: 25px;
}
.promo-img.phone {
  width: 20%;
  top: 25px;
}
.promo-img.number {
  width: 70%;
  top: 5px;
}
.promo-item-text {
  color: #fff;
  font-weight: 400;
  font-size: 19px;
  line-height: 1.25;
  margin-top: 120px;
}
.promo-button {
  margin-top: 40px;
}
@media (max-width: 1400px) {
  .promo-item-body.big {
    width: 400px;
  }
  .promo-item-body.small {
    width: 300px;
  }
}
@media (max-width: 1200px) {
  .promo-item-body.big {
    width: 33vw;
  }
  .promo-item-body.small {
    width: 24vw;
  }
  .promo-item-body {
    padding: 0 20px;
    padding-bottom: 40px;
  }
  .promo-item-text {
    margin-top: 160px;
  }
}
@media (max-width: 992px) {
  .promo-item-body {
    height: 250px;
  }
  .promo-item-badge span {
    font-size: 14px;
  }
  .promo-item-badge {
    width: 136px;
    height: 100px;
    padding-bottom: 20px;
  }
  .promo-item-text {
    margin-top: 140px;
    font-size: 16px;
  }
}
@media (max-width: 768px) {
  .promo-list {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .promo-item-body {
    margin: 0 auto;
  }
  .promo-item-body.big {
    width: 100%;
  }
  .promo-item-body.small {
    width: 100%;
  }
  .promo-item {
    width: 60%;
    position: relative;
  }
  .promo-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #000 15%, rgba(0, 0, 0, 0));
    z-index: 0;
  }
  .promo-item:not(:last-child) {
    margin-right: 0px;
    margin-bottom: -40px;
  }
  .promo-img.phone {
    width: 30%;
    top: 25px;
    margin-top: -40px;
  }
  .promo-item-text {
    margin-top: 100px;
    font-size: 16px;
  }
}
@media (max-width: 556px) {
  .promo-item {
    width: 80%;
  }
  .promo-item-badge span {
    font-size: 12px;
  }
}
</style>
