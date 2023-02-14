<template>
  <div class="form-section">
    <div class="form-section__subtitle">
      <h2 class="subtitle">
        moovy drive2earn app <br class="desk" />
        is Coming: Join the <br class="desk" />
        Waitlist
      </h2>
      <vue3-flip-countdown
        :deadlineDate="deadline"
        mainColor="#21E7D6"
        :labels="{}"
      />
    </div>
    <div class="form__body">
      <div class="form__body-text">
        <span>
          After you’re on the waitlist you’ll get a referral link to share. Be
          first in line for early access by reffering others. The more you
          refer, the higher up in line you’l go
        </span>
        <div class="form__image-wrapper">
          <img src="/img/form-image.png" alt="test-drive" class="image" />
          <div class="gradient-left"></div>
          <div class="gradient-right"></div>
        </div>
      </div>
      <div class="form-wrapper">
        <form class="form">
          <div>
            <div class="input-wrapper">
              <input
                type="text"
                class="form__input"
                placeholder="wallet"
                v-model="accountAddress"
              />
              <Transition mode="out-in">
                <div class="input__badge_connect" v-if="!accountAddress">
                  <w3m-core-button></w3m-core-button>
                </div>
                <div class="input__badge" v-else><span>connected</span></div>
              </Transition>
            </div>
            <span class="input__error" v-if="isAddressInvalid"
              >Please connect your wallet</span
            >
            <div class="input-wrapper">
              <input
                type="email"
                class="form__input"
                placeholder="your email"
                v-model.trim="email"
              />
              <span class="input__error" v-if="isEmailInvalid"
                >Email is invalid</span
              >
              <span class="input__error" v-if="emailMessage">{{
                emailMessage
              }}</span>
            </div>
            <div class="input-wrapper">
              <input
                type="text"
                class="form__input"
                placeholder="name"
                v-model.trim="name"
              />
              <span class="input__error" v-if="isNameInvalid"
                >Please enter your name</span
              >
            </div>
          </div>
          <div>
            <div class="checkbox-input-wrapper">
              <input type="checkbox" v-model="checkbox" />
              <p>
                Yes, please send me the latest news about Moovy. <br />
                I understand I can unsubscribe at any time.
                <router-link to="/agreements" class="link"
                  >Privacy Policy</router-link
                >
              </p>
            </div>
            <span class="input__error" v-if="isCheckboxInvalid"
              >This is a required field</span
            >
            <span class="input__error" v-if="internalError">{{
              internalError
            }}</span>

            <div class="submit-button">
              <Button @click.prevent="onSubmit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { Button } from '@/components';
import { configureChains, createClient } from '@wagmi/core';
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains';

import { Web3Modal } from '@web3modal/html';

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from '@web3modal/ethereum';

const PROJECT_ID = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

const chains = [arbitrum, mainnet, polygon];

// Wagmi Core Client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: PROJECT_ID }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: PROJECT_ID,
    version: '2',
    appName: 'web3Modal',
    chains,
  }),
  provider,
});

// Web3Modal and Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
const web3modal = new Web3Modal({ projectId: PROJECT_ID }, ethereumClient);

const unsubscribe = web3modal.subscribeModal((newState) =>
  console.log(newState)
);
console.log(unsubscribe());

console.log(web3modal);
ethereumClient.watchAccount((newValue) => {
  if (newValue.isConnected) {
    accountAddress.value = newValue.address;
  } else {
    accountAddress.value = '';
  }
});

const accountAddress = ref('');
const email = ref('');
const name = ref('');
const checkbox = ref(false);

const isEmailInvalid = ref(false);
const isAddressInvalid = ref(false);
const isNameInvalid = ref(false);
const isCheckboxInvalid = ref(false);

const emailMessage = ref('');
const internalError = ref('');

console.log(ethereumClient.getAccount());

const emit = defineEmits(['submit']);

const onSubmit = async () => {
  !accountAddress.value
    ? (isAddressInvalid.value = true)
    : (isAddressInvalid.value = false);
  !/^[^@]+@\w+(\.\w+)+\w$/.test(email.value)
    ? (isEmailInvalid.value = true)
    : (isEmailInvalid.value = false);
  !name.value ? (isNameInvalid.value = true) : (isNameInvalid.value = false);
  !checkbox.value
    ? (isCheckboxInvalid.value = true)
    : (isCheckboxInvalid.value = false);
  if (
    !isAddressInvalid.value &&
    !isEmailInvalid.value &&
    !isNameInvalid.value &&
    !isCheckboxInvalid.value
  ) {
    await fetch('https://moovylanding.herokuapp.com/saveUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        address: accountAddress.value,
        name: name.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message === 'User exist') {
          emailMessage.value = 'User already exists';
        } else if (res.message === 'Internal error') {
          internalError.value =
            'Ops... Something went wrong. Please try again later';
        } else {
          emit('submit', res.message);
        }
      })
      .catch((err) => {
        console.log(err);
        internalError.value =
          'Ops... Something went wrong. Please try again later';
      });
  }
};
const deadline = new Date(
  'Fri Feb 27 2023 03:00:00 GMT+0300 (Москва, стандартное время)'
);
</script>
<style scoped>
.flip-clock {
  margin: 0 !important;
  margin-left: 80px !important;
}
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
  justify-content: center;
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
  margin-top: -100px;
  margin-left: -40px;
  position: relative;
  z-index: 0;
}
.form-wrapper {
  border: 1px #fff solid;
  border-bottom: none;
  border-radius: 40px;
  /* overflow: hidden; */
  padding: 65px 50px;
  background: linear-gradient(0deg, #161616 0%, rgba(22, 22, 22, 0) 110.13%);
  position: relative;
  z-index: 1;
  margin-left: -90px;
}
.form-wrapper::after {
  content: '';
  width: calc(100% + 5px);
  height: 300px;
  bottom: 0px;
  left: -2px;
  position: absolute;
  background: linear-gradient(to top, #000 20%, rgba(0, 0, 0, 0));
  z-index: 1;
}
.form {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.input-wrapper {
  width: 30vw;
  max-width: 538px;
  position: relative;
}
.input-wrapper:not(:first-child) {
  margin-top: 30px;
}
.input__badge {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  background: linear-gradient(320.66deg, #000000 14.75%, #0c0d0d 84.81%);
  border-radius: 25.0888px;
  justify-content: center;
  align-items: center;
  padding: 7px 10px;
  pointer-events: none;
}
.input__badge_connect {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  border-radius: 25.0888px;
  justify-content: center;
  align-items: center;
  padding: 7px 10px;
  pointer-events: none;
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
  width: 100%;
  padding: 15px 92px 15px 30px;
  background: linear-gradient(138.69deg, #141313 0%, #18191b 100%);
  box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  border: none;
  box-sizing: border-box;
  outline: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.25;
  color: #e0edf5;
  transition: all 0.3s ease 0s;
}
.input__error {
  color: rgb(211, 43, 43);
  font-size: 14px;
  display: block;
  margin: 15px 0 0px 20px;
}
.form__input_wallet {
  pointer-events: none;
}
.form__input:focus {
  box-shadow: 0px 0px 15px #21e7d6;
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
.gradient-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(to right, #000, rgba(0, 0, 0, 0));
  z-index: 5;
}
.gradient-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(to left, #000, rgba(0, 0, 0, 0));
  z-index: 5;
}
@media (max-width: 1200px) {
  .desk {
    display: none;
  }
  .form-section__subtitle {
    flex-direction: column-reverse;
  }
  .flip-clock {
    margin: 0 auto !important;
  }
  .subtitle {
    margin-top: 40px;
    text-align: center;
    max-width: 600px;
  }
  .form-wrapper {
    padding: 40px 30px;
  }
  .input-wrapper {
    width: 100%;
  }
  .form__image-wrapper {
    width: 50vw;
    margin-top: 0px;
  }
}
@media (max-width: 768px) {
  .subtitle {
    max-width: 550px;
  }
  .form__body {
    margin-top: 40px;
    flex-direction: column;
    align-items: center;
  }
  .form__body-text {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
  .form__body-text span {
    text-align: center;
    max-width: none;
    margin: 0 auto;
    width: 60vw;
  }
  .form__image-wrapper {
    width: 80vw;
    margin-left: 0;
  }
  .form-wrapper {
    margin-left: 0px;
  }
}
@media (max-width: 556px) {
  .subtitle {
    max-width: 450px;
  }
  .form__body-text span {
    font-size: 16px;
    width: 80vw;
  }
  .form__image-wrapper {
    width: 100vw;
  }
}
</style>
