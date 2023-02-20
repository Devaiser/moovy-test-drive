<template>
  <div class="form-section">
    <div class="form-section__subtitle">
      <h2 class="subtitle">
        Share your reffeal link <br class="desk" />
        to climb the <br class="desk" />
        leaderboard
      </h2>
      <div class="rank">
        <p class="rank__subtitle">Your rank:</p>
        <p class="rank__result">{{ rank }}</p>
      </div>
    </div>
    <div class="form__body">
      <div class="form__body-text">
        <span>
          Every time someone joins the waitlist using your refferal link, you’ll
          move up the leaderboard. Be first in line for early access to Moovy by
          reffering others
        </span>
        <div class="form__image-wrapper">
          <img src="/img/ShumanCrystal.png" alt="ShumanCrystal" class="image" />
        </div>
      </div>
      <div class="form-wrapper">
        <form class="form">
          <div class="input-wrapper">
            <input
              type="text"
              class="form__input"
              placeholder="link"
              v-model="referralLink"
            />
            <div class="input__badge" @click="copy(referralLink)">
              <span>{{ copied ? 'copied' : 'copy' }}</span>
            </div>
          </div>
          <div class="form__success">
            <a href="https://moovy.io/" target="_blank">Continue</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useClipboard } from '@vueuse/core';

const props = defineProps({
  refLink: {
    type: String,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
});

console.log(props.refLink);

const referralLink = ref(props.refLink);

const { copy, copied } = useClipboard({
  source: referralLink.value,
  copiedDuring: 3000,
  legacy: true,
});
</script>
<style scoped>
.form-section__subtitle {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
}
.subtitle {
  text-align: end;
}
.form__body {
  display: flex;
  margin-top: 40px;
}
.form__body-text {
  position: relative;
  z-index: 1;
  width: 60vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}
.form__body-text span {
  font-weight: 400;
  font-size: 19px;
  line-height: 1.25;
  text-align: end;
  color: #b5d1d6;
  max-width: 406px;
  display: block;
  margin-left: auto;
  margin-right: 110px;
  position: relative;
  z-index: 1;
}
.form__image-wrapper {
  width: 50vw;
  margin-top: 80px;
  margin-left: 140px;
  position: relative;
  z-index: 0;
}
.form-wrapper {
  border: 1px #fff solid;
  /* border-bottom: none; */
  border-radius: 40px;
  /* overflow: hidden; */
  padding: 65px 50px 40px 50px;
  height: fit-content;
  background: linear-gradient(0deg, #161616 0%, rgba(22, 22, 22, 0) 110.13%);
  position: relative;
  z-index: 1;
  margin-left: -90px;
}
.form {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.input-wrapper {
  width: 30vw;
  max-width: 538px;
  position: relative;
  box-shadow: 0px 0px 15px #21e7d6;
  border-radius: 40px;
  background: linear-gradient(138.69deg, #141313 0%, #18191b 100%);
}
.input-wrapper:not(:last-child) {
  margin-bottom: 30px;
}
.input__badge {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  background: linear-gradient(320.66deg, #000000 14.75%, #0c0d0d 84.81%);
  border-radius: 25.0888px;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 7px 10px;
  min-width: 60px;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 2;
}
.input__badge span {
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  color: #fff;
  margin-bottom: 2px;
  user-select: none;
}
.form__input {
  width: calc(100% - 92px);
  display: block;
  padding: 15px 0 15px 30px;
  background: none;
  border-radius: 40px;
  border: none;
  box-sizing: border-box;
  outline: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.25;
  color: #e0edf5;
  transition: all 0.3s ease 0s;
  z-index: 0;
  position: relative;
}
.form__input::placeholder {
  color: rgba(255, 255, 255, 0.41);
  text-transform: uppercase;
  font-size: 18px;
}
.checkbox-input-wrapper {
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
}
.checkbox-input-wrapper p {
  font-weight: 400;
  font-size: 12px;
  line-height: 1.25;
  color: #e0edf5;
  margin-left: 15px;
}
.checkbox-input-wrapper .link {
  color: #21e7d6;
}
.submit-button {
  margin-top: 20px;
}
.rank {
  width: 220px;
  height: 91px;
  background: linear-gradient(285.8deg, #21e7d6 3.03%, #21e7d6 81.45%);
  border-radius: 8.85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-left: 80px;
}
.rank__subtitle {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.25px;
  color: #000;
  margin-bottom: 15px;
}
.rank__result {
  text-transform: uppercase;
  background: linear-gradient(98.27deg, #000000 0%, #000000 105.42%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 900;
  font-size: 32px;
  line-height: 1.06;
}
.form__text {
  margin-top: 20px;
}
.form__text p {
  color: #b5d1d6;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.25;
}
.form__success {
  background: linear-gradient(
    0deg,
    #161616 37.94%,
    rgba(22, 22, 22, 0) 148.07%
  );
  border-radius: 40px;
  width: 232px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  margin: 0 auto;
  position: relative;
  margin-top: 100px;
}
.form__success a {
  font-weight: 400;
  font-size: 13px;
  line-height: 1.25;
  color: #b5d1d6;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1200px) {
  .form__image-wrapper {
    margin-left: 0;
  }
  .form-wrapper {
    padding: 40px 30px;
    margin-left: -90px;
  }
}
@media (max-width: 768px) {
  .form-section__subtitle {
    flex-direction: column;
  }
  .subtitle {
    text-align: center;
  }
  .rank {
    margin-top: 40px;
    margin-left: 0px;
  }
  .desk {
    display: none;
  }
  .form__body {
    flex-direction: column;
    align-items: center;
  }
  .form-wrapper {
    margin-left: 0px;
    margin-top: 40px;
  }
  .form__body-text {
    position: relative;
    z-index: 1;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
  .form__body-text span {
    max-width: 406px;
    margin: 0 auto;
    text-align: center;
  }
  .form__image-wrapper {
    width: 100vw;
    margin: 0 auto;
    margin-top: 40px;
  }
  .form {
    width: 60vw;
  }
  .input-wrapper {
    width: 100%;
    max-width: none;
  }
}
@media (max-width: 556px) {
  .form {
    width: 70vw;
  }
  .form__body-text span {
    font-size: 16px;
    padding: 0 20px;
  }
  .form__success {
    width: 100%;
    margin-top: 40px;
  }
}
</style>
