<template>
  <footer class="footer">
    <div class="footer__logo">
      <img src="/img/footer-logo.svg" alt="logo" />
    </div>
    <div class="footer__social">
      <p class="footer__social-text">Social media</p>
      <div class="footer__social-list">
        <a
          href="https://t.me/moovyglobal"
          target="_blank"
          class="footer__social-item"
        >
          <IconTelegram />
        </a>
        <!-- <a
          href="https://discord.gg/yqkyNFVSZf"
          target="_blank"
          class="footer__social-item"
        >
          <IconDiscord :width="24" :height="16" />
        </a> -->
        <a
          href="https://twitter.com/moovy_io"
          target="_blank"
          class="footer__social-item"
        >
          <IconTwitter :width="23" :height="18" />
        </a>
        <a
          href="https://instagram.com/moovy_io"
          target="_blank"
          class="footer__social-item"
        >
          <IconInstagram :width="23" :height="23" />
        </a>
        <a
          href="https://moovy-io.medium.com/"
          target="_blank"
          class="footer__social-item"
        >
          <IconMedium />
        </a>
      </div>
      <div class="footer__links">
        <div class="footer__links-column">
          <a href="https://bbsoft.io" target="_blank">BBSOFT</a>
          <a
            href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/avatars"
            target="_blank"
            >AVATARS</a
          >
          <a
            href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/avatars/who-are-you-in-the-moovy/technician"
            target="_blank"
            >TECHNICIAN</a
          >
        </div>
        <div class="footer__links-column">
          <a
            href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/avatars/who-are-you-in-the-moovy/driver"
            target="_blank"
            >DRIVER</a
          >
          <a
            href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/avatars/who-are-you-in-the-moovy/ecologist"
            target="_blank"
            >ECOLOGIST</a
          >
          <a
            href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/avatars/talent-system"
            target="_blank"
            >TALENT SYSTEM</a
          >
          <a
            href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/cars/car-types-and-rarity"
            target="_blank"
            >CAR SYSTEM</a
          >
        </div>
        <div class="footer__links-column">
          <a
            href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/cars/car-types-and-rarity"
            target="_blank"
            >CAR TYPES</a
          >
          <a
            href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/cars/car-types-and-rarity"
            target="_blank"
            >RARITY</a
          >
          <a
            href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/fuel-system"
            target="_blank"
            >FUEL SYSTEM</a
          >
          <a
            href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/cars/car-attributes"
            target="_blank"
            >CAR ATTRIBUTES</a
          >
        </div>
      </div>
    </div>
    <router-link class="footer__link" to="/agreements"
      >User Agreement</router-link
    >
    <p class="footer__text">
      Copyright © 2022 MOOVY GEM FZE. All rights reserved
    </p>
  </footer>
</template>
<script setup>
import {
  // IconDiscord,
  IconMedium,
  IconTelegram,
  IconTwitter,
  IconInstagram,
} from '@/components/icons';
</script>
<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #000;
  align-items: center;
  position: relative;
  top: -2px;
  /* margin-top: -2px; */
  padding: 145px 20px 60px 20px;
}
.footer__logo {
  width: 260px;
  height: 58px;
  margin-bottom: 20px;
}
.footer__logo img {
  display: block;
  widows: 100%;
  height: 100%;
  object-fit: cover;
}
.footer__social {
  margin-top: 15px;
  margin-bottom: 10px;
}
.footer__social-text {
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 14px;
  text-align: center;
}
.footer__social-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer__social-item:not(:last-child) {
  margin-right: 17px;
}
.footer__link {
  margin-top: 20px;
  color: #1fe5d3;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
}
.footer__text {
  font-size: 16px;
  color: #fff;
  text-align: center;
}
.footer__links {
  display: flex;
  margin-top: 20px;
}
.footer__links-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer__links-column:not(:last-child) {
  margin-right: 45px;
}
.footer__links-column a {
  font-weight: 600;
  font-size: 14px;
  line-height: 1.25;
  color: #888686;
}
.footer__links-column a:not(:last-child) {
  margin-bottom: 3px;
}
@media (max-width: 556px) {
  .footer__logo {
    width: 170px;
    height: 37px;
    margin-bottom: 30px;
  }
  .footer__links-column a {
    font-weight: 300;
    font-size: 14px;
  }
}
</style>
