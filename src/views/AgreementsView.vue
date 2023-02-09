<template>
  <div class="fon-agreement">
    <section>
      <div class="for-head">
        <!-- <a href="/" class="header__logo">
          <svg class="icon icon-logo">
            <use xlink:href="/img/sprite.svg#icon-logo"></use>
          </svg>
        </a> -->
        <router-link to="/" class="logo">
          <img src="/img/footer-logo.svg" alt="logo" />
        </router-link>
      </div>
      <div
        class="menu-fix"
        :class="{ for__filter__active: isMenuVisible }"
        ref="target"
      >
        <div class="catalog-filter-close" @click="isMenuVisible = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path d="M1 1L7 7M13 13L7 7M7 7L13 1L1 13" stroke="#ffffff"></path>
          </svg>
        </div>
        <div class="reviews-min-text-hrefs">
          <ul>
            <li
              class="click-reviews country-city-min"
              :class="{ 'active-href': activeSection === 'user-agree' }"
              data-catalog="user-agree"
              @click="setActiveSection('user-agree')"
            >
              USER AGREEMENT
            </li>
            <li
              class="click-reviews country-city-min"
              data-catalog="terms"
              @click="setActiveSection('terms')"
              :class="{ 'active-href': activeSection === 'terms' }"
            >
              TERMS AND DEFINITIONS USED IN THE AGREEMENT
            </li>
            <li
              class="click-reviews country-city-min"
              data-catalog="conclusion"
              @click="setActiveSection('conclusion')"
              :class="{ 'active-href': activeSection === 'conclusion' }"
            >
              CONCLUSION OF THE END-USER LICENSE AGREEMENT
            </li>
            <li
              class="click-reviews country-city-min"
              data-catalog="general"
              @click="setActiveSection('general')"
              :class="{ 'active-href': activeSection === 'general' }"
            >
              GENERAL PROVISIONS
            </li>
            <li
              class="click-reviews country-city-min"
              data-catalog="website"
              @click="setActiveSection('website')"
              :class="{ 'active-href': activeSection === 'website' }"
            >
              TERMS OF USE OF THE WEBSITE
            </li>
            <li
              class="click-reviews country-city-min"
              data-catalog="access"
              @click="setActiveSection('access')"
              :class="{ 'active-href': activeSection === 'access' }"
            >
              ACCESS TO SERVICES
            </li>
            <li
              class="click-reviews country-city-min"
              data-catalog="policy"
              @click="setActiveSection('policy')"
              :class="{ 'active-href': activeSection === 'policy' }"
            >
              PRIVACY POLICY
            </li>
            <li
              class="click-reviews country-city-min"
              data-catalog="notice"
              @click="setActiveSection('notice')"
              :class="{ 'active-href': activeSection === 'notice' }"
            >
              COOKIE NOTICE
            </li>
            <li
              class="click-reviews country-city-min"
              data-catalog="consent"
              @click="setActiveSection('consent')"
              :class="{ 'active-href': activeSection === 'consent' }"
            >
              CONSENT TO PROCESSING OF PERSONAL DATA
            </li>
            <li
              class="click-reviews country-city-min"
              data-catalog="user-rights"
              @click="setActiveSection('user-rights')"
              :class="{ 'active-href': activeSection === 'user-rights' }"
            >
              USER RIGHTS AND RESPONSIBILITIES
            </li>
            <li
              class="click-reviews country-city-min"
              data-catalog="warranties"
              @click="setActiveSection('warranties')"
              :class="{ 'active-href': activeSection === 'warranties' }"
            >
              WARRANTIES AND LIABILITIES
            </li>
            <li
              class="click-reviews country-city-min"
              data-catalog="limitation"
              @click="setActiveSection('limitation')"
              :class="{ 'active-href': activeSection === 'limitation' }"
            >
              LIMITATION OF LIABILITY
            </li>
          </ul>
        </div>
      </div>
      <div class="agreement__cnt">
        <div class="container">
          <div class="close-filter-in-mob" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M28,9H11a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"></path>
              <path d="M7,9H4A1,1,0,0,1,4,7H7A1,1,0,0,1,7,9Z"></path>
              <path d="M21,17H4a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"></path>
              <path d="M11,25H4a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Z"></path>
              <path
                d="M9,11a3,3,0,1,1,3-3A3,3,0,0,1,9,11ZM9,7a1,1,0,1,0,1,1A1,1,0,0,0,9,7Z"
              ></path>
              <path
                d="M23,19a3,3,0,1,1,3-3A3,3,0,0,1,23,19Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,23,15Z"
              ></path>
              <path
                d="M13,27a3,3,0,1,1,3-3A3,3,0,0,1,13,27Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,13,23Z"
              ></path>
              <path d="M28,17H25a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"></path>
              <path d="M28,25H15a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"></path>
            </svg>
            <span>Choose Section</span>
          </div>
          <div class="reviews-min-info">
            <div
              class="reviews-min-block-js"
              data-catalog="user-agree"
              v-if="activeSection === 'user-agree'"
            >
              <div class="section-user__main">
                <h1>USER AGREEMENT</h1>
                <div class="section-the-user">
                  <strong>SECTIONS OF THE USER AGREEMENT:</strong>
                  <ul class="style-number">
                    <li>TERMS AND DEFINITIONS USED IN THE AGREEMENT</li>
                    <li>CONCLUSION OF THE USER AGREEMENT</li>
                    <li>GENERAL PROVISIONS</li>
                    <li>TERMS OF USE OF THE WEBSITE</li>
                    <li>ACCESS TO SERVICES</li>
                    <li>
                      GENERAL TERMS OF ACCESS TO PAID OR RESTRICTED RESOURCES
                    </li>
                    <li>PRIVACY POLICY</li>
                    <li>COOKIE NOTICE</li>
                    <li>CONSENT TO PROCESSING OF PERSONAL DATA</li>
                    <li>USER RIGHTS AND RESPONSIBILITIES</li>
                    <li>WARRANTIES AND LIABILITIES</li>
                    <li>LIMITATION OF LIABILITY</li>
                    <li>INTELLECTUAL PROPERTY RIGHTS</li>
                    <li>PERIOD OF VALIDITY OF THE USER AGREEMENT</li>
                  </ul>
                  <h1>Responsibility for the content of the pages</h1>
                  <p>
                    B.B Soft FZE <br />
                    Al Shmookh Business Center, <br />
                    One UAQ, <br />
                    UAQ Free Trade Zone, <br />
                    Umm Al Quwain, U.A.E.
                  </p>
                  <h1>Disclaimer</h1>
                  <p>
                    All texts and links have been carefully checked and are
                    continuously updated. We make every effort to provide
                    correct and complete information on this website, but assume
                    no responsibility, guarantees or liability for the
                    information provided through this website being correct,
                    complete or up-to-date. We reserve the right to change the
                    information on this website at any time and without prior
                    notice and we do not undertake to update the information
                    contained.
                    <br /><br />
                    All links to external providers were checked for correctness
                    at the time of their inclusion, but we are not liable or the
                    content and availability of websites that can be reached via
                    hyperlinks.
                    <br /><br />
                    The provider of the page to which reference is made is
                    solely liable for illegal, incorrect or incomplete content
                    and in particular for damage caused by the content of linked
                    pages. It does not matter whether the damage is of a direct,
                    indirect or financial nature or whether there is any other
                    damage that could result from data loss, loss of use or
                    other reasons of any kind.
                  </p>
                  <h1>Privacy</h1>
                  <p>
                    We cannot guarantee the security of data transmission on the
                    Internet. In particular, there is a risk of access by third
                    parties when data is transmitted by e-mail. Any use of the
                    contact data published in the imprint by third parties for
                    advertising purposes is hereby expressly prohibited.
                    <br /><br />
                    The operator expressly reserves the right to take legal
                    action in the event of unsolicited advertising or
                    information material being sent. Should individual
                    regulations or formulations of this disclaimer of liability
                    be or become ineffective, the rest remain Regulations in
                    their content and validity are unaffected by this.
                  </p>
                  <h1>Technology and Design</h1>
                  <p>
                    B.B Soft FZE <br />
                    Al Shmookh Business Center, <br />
                    One UAQ, <br />
                    UAQ Free Trade Zone, <br />
                    Umm Al Quwain, U.A.E.
                  </p>
                  <p>
                    Please read the terms of the present USER AGREEMENT
                    carefully before you begin to use the Website and/or
                    Services. If you do not agree with the terms of the present
                    agreement and/or the terms contained in the documents and/or
                    obligations to which the present document refers (which
                    include the ones provided in the form of electronic links)
                    and/or do not have the right to enter into such an agreement
                    on the basis of such documents or obligations, you should
                    immediately stop all use of the Website and/or its Services.
                  </p>
                  <p>
                    The Administration has the right to unilaterally change the
                    terms of this agreement at any time. Such changes come into
                    force from the moment the new version of the agreement is
                    posted on the website. If the User disagrees with the
                    changes made, they are obliged to terminate the use of the
                    Website, its materials and/or Services.
                  </p>
                  <p>
                    Relations related to the processing of information,
                    including but not limited to: collection, use, storage,
                    distribution and protection of information of Users of the
                    Website are governed by the User Agreement, including the
                    PRIVACY POLICY section and other rules and references posted
                    within the Service.
                  </p>
                </div>
                <div class="formacar">
                  <p>© 2022 Moovy Gem FZE. All rights reserved. 18+</p>
                </div>
              </div>
            </div>
            <div
              class="reviews-min-block-js"
              data-catalog="terms"
              v-if="activeSection === 'terms'"
            >
              <div class="section-user__main">
                <h1>TERMS AND DEFINITIONS USED IN THE AGREEMENT</h1>
                <div class="section-the-user">
                  <p>
                    <b>User Agreement</b> – a contract concluded between the
                    Parties by the User Accepting the Offer proposed by
                    FormaCar, and regulating the relations of the Parties
                    arising from the use of the Website and/or its Services by
                    the User.
                  </p>
                  <p>
                    <b>Offer</b>– FormaCar's offer addressed to a potential User
                    to conclude an User Agreement with them (the User is
                    considered to have entered into such an User Agreement upon
                    Accepting the Offer) that defines all the rights,
                    obligations, responsibilities of the Parties, and also
                    contains all the essential terms of the User Agreement that
                    determine the relations between the Parties, including the
                    procedure for concluding and terminating this agreement
                    between the Parties.
                  </p>
                  <p>
                    <b>Acceptance</b> – the User fully and unconditionally
                    accepts the Offer and, accordingly, the terms of the User
                    Agreement as amended at the time of the actual use of the
                    Services, as well as concludes the User Agreement by joining
                    it, by performing actions aimed at using the Services,
                    including: visiting and using the Website, following the
                    links from the Website to other web resources, sending
                    messages via the contact form and other actions aimed at
                    using the functionality of the Services.
                  </p>
                  imply
                  <p>
                    The use of the Services after a new version of the User
                    Agreement comes into force shall imply that the User agrees
                    with it, and that the provisions of this new version shall
                    apply to the User in full.
                  </p>
                  <p><b>Parties</b> – Moovy and the User.</p>
                  <p>
                    <b>Moovy </b> – Moovy Gem FZE, which has all the necessary
                    rights to the Website to conclude with the User an User
                    Agreement and/or a license agreement and/or other
                    agreement/contract made in the form of an offer or in
                    another legal way.
                  </p>
                  <p>
                    <b>Affiliates </b> – official representative offices, parent
                    companies, subsidiaries, branch offices, divisions or other
                    legal entities that are part of a group of companies and
                    associated with Moovy on the basis of mutual participation
                    and/or contract.
                  </p>
                  <p>
                    <b>Copyright Holders</b> – individuals/legal entities that
                    have Exclusive Rights in relation to the Website and
                    Content, including the right of use/disposal.
                  </p>
                  <p>
                    <b>Administration </b> – a person or a group of persons who
                    control the operation of the Service and the Users'
                    compliance with the terms of the User Agreement.
                  </p>
                  <p>
                    <b>Moovy Website</b> - (hereinafter referred to as the
                    Website) – a system of programs and a set of logically
                    interconnected web pages located at
                    <a href="https://moovy.io/">https://moovy.io/</a> , serving
                    as an interface designed to provide Users with access to the
                    Services.
                  </p>
                  <p>
                    <b>Services </b> – functionality available to Users when
                    using the Website or a part of it, provided for a fee or
                    free of charge on the basis of the User Agreement and/or
                    license agreement and/or other agreement/contract concluded
                    between Moovy and Users in the form of an offer or in
                    another legal way. This functionality includes, but is not
                    limited to:
                  </p>
                  <ul>
                    <li>
                      <b>a) Information resources of the service</b> –
                      informational and technical capabilities of the Website
                      that allow Users to receive Content by visualizing it.
                    </li>
                    <li>
                      <b> b) Crypto Service</b> – the opportunities provided by
                      blockchain technologies.
                    </li>
                    <li>
                      <b>c) Support Services</b> – features of the Website that
                      enable Users to receive informational assistance or
                      contact the support team.
                    </li>
                  </ul>
                  <p>
                    <b>Content</b> – informational content of the Website as a
                    whole (photos, videos, audio, texts, 3D models, articles and
                    images, as well as any other informational materials) owned
                    by the respective Copyright Holders and used by Moovy in
                    order to post it on the Website and organize the functioning
                    of the Services.
                  </p>
                  <p>
                    <b>Exclusive Rights</b> – intellectual rights are recognized
                    to the results of intellectual activity and means of
                    individualization equated to them in relation to the
                    Website, Content, logo and/or trademark (trade name), which
                    are a property right subject to protection in accordance
                    with international law (International Convention of July 24
                    1971 "Berne Convention for the Protection of Literary and
                    Artistic Works").
                  </p>
                  <p>
                    <b>Simple (non-exclusive) License</b> – the right of the
                    User, granted by Moovy for a fee or free of charge, to use
                    the Website and, accordingly, its Services within the limits
                    provided for by the terms of the User Agreement and/or
                    license agreement and/or other agreement/contract concluded
                    in the form of an offer or in another legal way between the
                    Parties, with Moovy retaining the right to issue a license
                    to others.
                  </p>
                  <p>
                    <b>Registration</b> – a set of actions performed by the User
                    in accordance with the instructions specified on the Product
                    Service, including the provision of Personal Details and
                    other information, by using a special form of the user
                    interface of the Website in order to create a Personal
                    Profile and/or gain access to the functionality of the
                    Website.
                  </p>
                  <p>
                    <b>Authorization</b> – a set of actions preformed by the
                    User required in order to gain access to the functionality
                    of the Website and/or its Services, including the Personal
                    Profile, as soon as the Registration procedure is complete.
                  </p>
                  <p>
                    <b>Personal Details</b> – information such as: username,
                    User’s personal e-mail address, password, phone number,
                    blockchain data, etc., created/provided independently by the
                    User during the process of Registration on the Service, or
                    altered later by the User by means of Service Tools, or in a
                    manner otherwise provided for by the Service, in order to
                    access the Services after the Registration.
                  </p>
                  <p>
                    <b>Personal Account</b> – a set of User’s Credentials
                    required for their identification (authentication) and
                    providing them with access to the Services.
                  </p>
                  <p>
                    <b>Personal Profile</b> – the User’s personal section of the
                    Service, which is associated with the Account and used by
                    the User to gain access to their Data, settings and control
                    over certain functions provided by the Service of the
                    Product.
                  </p>
                  <p>
                    <b>Password</b> – a unique sequence of characters required
                    for the User to carry out Registration, Authorization and
                    access to their Personal Profile and/or Services and/or
                    services provided by third-party resources, if such services
                    are used for Registration and/or Authorization purposes,
                    provided by the User independently and/or generated by the
                    Services in case it is lost and subsequently
                    restored/changed by the User.
                  </p>
                  <p>
                    <b>Personal Data</b> – personal information about the
                    personal data Subject and/or information directly or
                    indirectly related to a certain personal data Subject, which
                    is processed by the Operator and/or third parties with the
                    voluntary and/or informed consent of the personal data
                    Subject when using the Services for the purposes provided
                    for by the User Agreement, including the PRIVACY POLICY
                    section.
                  </p>
                  <p>
                    <b>Operator</b> – namely Moovy, which processes Personal
                    Data and also determines the purposes of processing Personal
                    Data, the composition of Personal Data to be processed,
                    actions (operations) performed with Personal Data within the
                    PRIVACY POLICY and other terms of this User Agreement
                    (hereinafter – Moovy).
                  </p>
                  <p>
                    <b> Personal Data Subject</b> – the Person, namely the User,
                    in respect of whom the processing of Personal data is
                    carried out (hereinafter referred to as the User).
                  </p>
                </div>
                <div class="formacar">
                  <p>© 2022 Moovy Gem FZE. All rights reserved. 18+</p>
                </div>
              </div>
            </div>
            <div
              class="reviews-min-block-js"
              data-catalog="conclusion"
              v-if="activeSection === 'conclusion'"
            >
              <div class="section-user__main">
                <h1>CONCLUSION OF THE END-USER LICENSE AGREEMENT</h1>
                <div class="section-the-user">
                  <p>
                    This Offer is considered accepted by the User, and the User
                    Agreement between Moovy and the User is considered concluded
                    from the moment of Acceptance of the Offer.
                  </p>
                  <p>
                    The conclusion of the User Agreement is carried out in
                    accordance with the terms of the current version of the User
                    Agreement, posted on the Internet at the URL
                    <a href="https://documentation.Moovy.io/user_agreement/"
                      >https://documentation.Moovy.io/user_agreement/</a
                    >
                    at the time of Acceptance. If the User uses the Services
                    after a new version of the User Agreement (located in the
                    relevant section of the Website) comes into force, it means
                    that the User fully agrees with it, and all its provisions
                    fully apply to them.
                  </p>
                  <p>
                    The User Agreement may be changed by Moovy at any time
                    without any special notice to the User. The new version of
                    the User Agreement comes into force from the moment it is
                    posted in the relevant section of the Website, unless the
                    new version expressly states otherwise. Regular familia
                  </p>
                  <p>
                    The current version of this User Agreement is available in
                    the relevant section of the Website.
                  </p>
                </div>
                <div class="formacar">
                  <p>© 2022 Moovy Gem FZE. All rights reserved. 18+</p>
                </div>
              </div>
            </div>
            <div
              class="reviews-min-block-js"
              data-catalog="general"
              v-if="activeSection === 'general'"
            >
              <div class="section-user__main">
                <h1>GENERAL PROVISIONS</h1>
                <div class="section-the-user">
                  <p>
                    Under the terms of this User Agreement, Moovy offers the
                    User to use the Services available on the Website. With
                    regard to the use of individual Services, Moovy may
                    establish additional terms, rules and restrictions. Moovy
                    has the right to revise or change the terms of the Services,
                    supplement, change, limit, expand the functionality of the
                    Services, including the terms for the User's access to the
                    Services or certain functionality of the Service, at any
                    time.
                  </p>
                  <p>
                    The Services are provided to the User on the terms of free
                    and/or paid use, depending on the functionality of the
                    Service chosen by the User. The terms for providing the
                    functionality of the Service on a free basis are established
                    by this User Agreement. The conditions for providing the
                    User with certain functions of the Service on a paid basis
                    are established by this User Agreement and/or a separate
                    license agreement and/or other agreement/contract concluded
                    between the Parties in the form of an offer or in another
                    legal way, or the conditions posted on the Services
                    themselves.
                  </p>
                  <p>
                    The Website is a platform that enables Users to post
                    information and view Content independently and at their own
                    risk and peril, including, insofar as provided for by the
                    functionality of the Services found in the relevant section
                    of the Website, to interact with the Crypto Service and to
                    use other Services provided by the Website, insofar as
                    provided for by their functionality and/or the terms of any
                    concluded agreements.
                  </p>
                  <p>
                    By Accepting the Offer, the User guarantees that they have
                    all the rights and powers necessary to conclude and execute
                    the User Agreement. Moovy has the right to demand from the
                    User to provide information and documents confirming these
                    rights and powers in order to check them for compliance with
                    the requirements for Users, at any time. Legal
                    representatives of Users not having the legal capacity to
                    use the Services or of Users who, due to age and/or law, are
                    limited in their access to information posted on the
                    Website, are obliged to independently assess the degree of
                    risk for the User from using the Services and independently
                    bear responsibility and legal consequences that may result
                    from the use of such Services by the Users.
                  </p>
                  <p>
                    The provided Services can be changed, disabled,
                    supplemented, updated or change the form and nature of their
                    functionality at any time without prior notice to the User,
                    and therefore their use is offered "as is", i.e. in the form
                    and to the extent in which they are provided by Moovy at the
                    time the User accesses the Services. Moovy may, if
                    necessary, terminate (temporarily or permanently) the
                    provision of the Services (or any individual functions
                    within the Services) to all Users in general or to an
                    individual User in particular, at its sole discretion and
                    without prior notice.
                  </p>
                  <p>
                    Services can be provided to Users on the basis of
                    data/services/licenses of third-party services.
                  </p>
                  <p>
                    This User Agreement applies to the Website and all currently
                    existing features of the Services, as well as to any
                    development and/or addition of new features, as well as
                    changes to existing features of the Services.
                  </p>
                  <p>
                    The User acknowledges and agrees that nothing in the User
                    Agreement can be understood as the establishment of any
                    relations between the User and Moovy that are not expressly
                    provided for in this User Agreement.
                  </p>
                  <p>
                    The User hereby confirms that they have the technical
                    information necessary to launch and use the Services,
                    including the information about hardware and software
                    requirements. The User also confirms that they have the
                    technical means necessary to use the Services.
                  </p>
                  <p>
                    The User hereby acknowledges and understands that the
                    graphic, audio and/or video materials included in the
                    Services may, under some circumstances, cause an
                    exacerbation of nervous disorders in persons suffering from
                    such disorders, including neuropsychiatric conditions. The
                    User confirms that they do not suffer from such disorders,
                    or assures that they will not use the Services.
                  </p>
                  <p>
                    The User is obliged to stop using the Services for prolonged
                    periods of time if this use may cause damage to their
                    physical or mental health.
                  </p>
                </div>
                <div class="formacar">
                  <p>© 2022 Moovy Gem FZE. All rights reserved. 18+</p>
                </div>
              </div>
            </div>
            <div
              class="reviews-min-block-js"
              data-catalog="website"
              v-if="activeSection === 'website'"
            >
              <div class="section-user__main">
                <h1>TERMS OF USE OF THE WEBSITE</h1>
                <div class="section-the-user">
                  <p>
                    Moovy grants the User the right to use the Website and its
                    Services under a Simple (non-exclusive) license.
                  </p>
                  <p>A simple (non-exclusive) license entitles the User to:</p>
                  <ul>
                    <li>
                      a) Run and subsequently use the Website and its Services.
                    </li>
                    <li>
                      b) Run the Website an unlimited number of times on an
                      unlimited number of devices owned by the User, provided
                      that the Website is fully preserved in the form provided
                      by Moovy.
                    </li>
                    <li>
                      c) Use the Services supported by the Website that are
                      available to Users free of charge, unless otherwise
                      provided for by separate license agreements and/or other
                      agreements/contracts concluded in the form of an offer or
                      another legal way between Moovy and the User, or the
                      Services themselves.
                    </li>
                    <li>
                      d) Use Website-supported Services that are available to
                      Users on a paid basis on the terms provided for by
                      separate license agreements and/or other
                      agreements/transactions concluded in the form of an offer
                      or otherwise legally between Moovy and the User or the
                      Services themselves, including on the terms of full
                      payment for such Services by the Users.
                    </li>
                  </ul>
                  <p>
                    The validity period and limits of the rights to use the
                    Simple (non-exclusive) license is equal to the validity
                    period and the terms of the User Agreement. Upon termination
                    of the User Agreement, the User loses the right to use the
                    Website and/or its parts and/or its Services.
                  </p>
                  <p>
                    The territory of use of the Website is all countries where
                    the Website can run on the User's device.
                  </p>
                  <p>
                    Moovy has the right to independently, unilaterally and at
                    its own discretion determine the conditions for granting a
                    Simple (non-exclusive license) in relation to the Services
                    provided/offered to the User, including, but not limited to:
                    terms of providing them on a paid or free basis, cost, terms
                    and limits of the rights to use the Services provided, etc.
                    Changes to these and other terms of use of the Website or
                    Services may be established in the relevant agreements or
                    posted/changed on the Services themselves.
                  </p>
                </div>
                <div class="formacar">
                  <p>© 2022 Moovy Gem FZE. All rights reserved. 18+</p>
                </div>
              </div>
            </div>
            <div
              class="reviews-min-block-js"
              data-catalog="access"
              v-if="activeSection === 'access'"
            >
              <div class="section-user__main">
                <h1>ACCESS TO SERVICES</h1>
                <div class="section-the-user">
                  <p>
                    The User can start using the Services by accessing the
                    Website via the appropriate link and interacting with the
                    Website interface using devices that allow such interaction
                    (having the appropriate technical
                    parameters/characteristics, software, access to
                    communication networks, including the Internet). Certain
                    features of the Website Service only become available to the
                    User after their Registration procedure and/or Authorization
                    on the Website.
                  </p>
                  <p>
                    During the Registration, the User shall submit the
                    Credentials that are required by the Services for the
                    Registration procedure and/or subsequent Authorization and
                    that the User shall choose/specify themselves. If the
                    following is provided for by the relevant Services as a part
                    of the Registration procedure, after entering the relevant
                    data/information, the User receives a code on the phone
                    number and/or e-mail address specified during Registration,
                    which is required for verification and/or authentication
                    purposes. Registration of any single Account is carried out
                    only once for any unique phone number and/or e-mail address
                    and/or one address of the User's electronic blockchain
                    wallet ID. A subsequent registration of a new account on the
                    Service using the phone number and/or email address and/or
                    electronic blockchain wallet ID previously specified during
                    the Registration is not allowed. The User can change their
                    Credentials in their Personal Profile on the Service or, if
                    necessary, in another way provided for by the Service.
                  </p>
                  <p>
                    In order to access the Services, the User undertakes to
                    provide accurate and complete information on all queries
                    made during the Registration, which is necessary for Moovy
                    to fulfill its obligations and/or for the User to gain
                    access to the Services. The User undertakes to keep this
                    information relevant.
                  </p>
                  <p>
                    The User is obliged to monitor the safety of their
                    Credentials and not to disclose them to any third parties.
                    The User is not entitled to transfer their Credentials to
                    third parties, as well as directly or indirectly allow third
                    parties to use the User’s Credentials for Authorization on
                    the Service.
                  </p>
                  <p>
                    The User shall be solely responsible for ensuring the
                    security (resistance to guessing) of their chosen Password,
                    and shall furthermore independently ensure the
                    confidentiality of their Password. The User shall be held
                    solely responsible for all actions (along with their
                    consequences) related to their use of the Services under
                    their User Account, including cases of voluntary surrender
                    of the User Account access data by the User to third parties
                    in any way that violates the terms of the User Agreement, or
                    without such surrender taking place.
                  </p>
                  <p>
                    Any action performed from within the User’s Personal Profile
                    and/or using their Credentials is considered an action
                    performed by the User themselves and imposes duties and
                    responsibilities on the User in relation to such actions,
                    including all liability for violation of the present User
                    Agreement, within the framework of the law requirements in
                    relation to any User Data posted by the User, and any
                    information posted by the User on the Service.
                  </p>
                  <p>
                    Users are obliged to change the Credentials immediately if
                    they have reason to suspect that the Credentials have been
                    disclosed, or can be otherwise used by third parties not
                    authorized by them, or when asked to change them by Moovy.
                  </p>
                  <p>
                    Moovy has the right to use any technical means available to
                    verify the validity of the information provided by the User
                    when using the Services. Moovy cannot guarantee that the
                    identity of any given User corresponds to that User’s claims
                    thereto and cannot be held responsible for any
                    discrepancies, as well as cannot guarantee that any
                    information provided by the Users of the Service is
                    accurate.
                  </p>
                  <p>
                    Moovy has the right to unilaterally deny any User access to
                    their Account and/or their Personal Profile. Moovy has the
                    right to terminate/block and/or restrict any User’s access
                    to the Services at any time, as well as block or delete User
                    Accounts on the Service without an opportunity of recovery,
                    as well as prohibit access from any Account to any specific
                    Services and features of the Services and remove any content
                    or information without explanation and unilaterally at its
                    own discretion, including when the User infringes on the
                    terms of the User Agreement and/or a separate license
                    agreement and/or any other agreement/transaction concluded
                    in the form of an offer or otherwise legally between Moovy
                    and the User, or without such infringement. The fact of
                    infringement of the terms of agreements and/or legislation
                    by the User is established by Moovy in a unilateral and
                    independent fashion. The User hereby agrees to this
                    procedure and undertakes to comply with any such decision
                    made by Moovy.
                  </p>
                  <p>
                    In order to anticipate or prevent violation of the User
                    Agreement and/or damage to the Website (for example, from
                    DDoS attacks or other hacker attacks, use of software
                    unauthorized by Moovy, including when used by the User to
                    upload, post, or download information, etc.), Moovy has the
                    right to restrict access of the User or any third parties to
                    the Website and Services by blocking access from the
                    relevant IP address or ranges of IP addresses.
                  </p>
                  <p>
                    Registration is not required for viewing information posted
                    on the Service in the public domain, however, when such
                    actions are performed from a mobile device, personal
                    computer, mobile phone, smartphone, tablet or other device
                    of the User, they are considered actions performed by the
                    User themselves, and entail the same obligations and
                    consequences for the User as if they themselves performed
                    these actions.
                  </p>
                  <p>
                    Moovy provides Users with round-the-clock access to the
                    Services, except for maintenance downtimes and other
                    circumstances that may prevent the use of the Services. Such
                    circumstances include, but are not limited to: the User’s
                    lack of Internet access, the User’s failure to maintain the
                    necessary technical infrastructure in error-free condition,
                    and others.
                  </p>
                  <p>
                    Moovy shall not be held responsible for any possible loss
                    and/or damage to data arising from the User’s violation of
                    the provisions of any agreements/transactions concluded by
                    the Parties, as well as improper access to and/or use of the
                    Services, or any technical failures.
                  </p>
                  <p>
                    By accessing the Service, the User agrees to receive
                    advertising information posted on the Service by Moovy
                    and/or third parties. The User understands and agrees that
                    Moovy does not determine the content and is not responsible
                    for the information posted by third parties, including
                    websites that may be linked to in the relevant materials.
                  </p>
                  <p>
                    Moovy has the right to independently, unilaterally and at
                    its own discretion, determine the conditions and/or
                    procedure under which Users shall pay for individual or paid
                    Services, including, but not limited to: the conditions,
                    procedure, and methods of payments effected by Users between
                    themselves and Moovy. Changes to the aforementioned
                    conditions may be set forth in the relevant agreements or
                    posted/changed on the Services themselves.
                  </p>
                  <p>
                    The use of software that allows viewing or posting
                    information on the Service bypassing the usual procedure for
                    posting information (for example, using software for
                    automatic upload of information) in the absence of written
                    permission from Moovy is strictly prohibited and may lead to
                    termination and/or suspension of the publication of
                    information, as well as blocking access to the Services.
                  </p>
                  <p>
                    The Services are not intended for use by persons under 18
                    years of age or other age provided for by the laws of the
                    country of citizenship/affiliation/residence of the User.
                    Moovy does not knowingly collect information about the age
                    of the User, including personal information from children
                    under 18 years of age. Therefore, restrictions on the access
                    of such persons to the Website and/or its Services are
                    carried out by the User themselves or their legal
                    representative. If the User is under the age of 18 or has
                    not reached the age necessary to use the Website and/or its
                    Services provided for by the laws of the country of
                    citizenship/affiliation/residence of the User, they are
                    obliged to stop all use of the Website and its Services. The
                    use of the Services by persons who are under the age of 18
                    or another age provided for by the laws of the country of
                    citizenship/affiliation/residence of the User means that
                    they act with the consent and/or approval of their legal
                    representative, with the latter bearing all the legal
                    consequences of such use.
                  </p>
                  <p>
                    The User's requests to Moovy about issues related to the use
                    of the Services are considered in the manner provided for on
                    the relevant Service or by e-mail: support@moovy.io.
                  </p>
                  <p>
                    Moovy has the right not to consider the User's requests when
                    they: do not contain information and documents necessary for
                    consideration of the request; contain false information and
                    (or) documents that have signs of being inauthentic; are
                    related to issues on which Moovy has previously sent a
                    response to the User (repeated requests); contain insults,
                    threats or requests stated in a highly expressive manner;
                    are sent in violation of other terms and the procedure for
                    consideration of requests provided for by Moovy.
                  </p>
                </div>
                <div class="formacar">
                  <p>© 2022 Moovy Gem FZE. All rights reserved. 18+</p>
                </div>
              </div>
            </div>
            <div
              class="reviews-min-block-js"
              data-catalog="policy"
              v-if="activeSection === 'policy'"
            >
              <div class="section-user__main">
                <h1>PRIVACY POLICY</h1>
                <div class="section-the-user">
                  <p>
                    Entering into (accepting) this User Agreement via the direct
                    use of the Services, viewing information, etc., including,
                    but not limited to: the Website, Services, feedback forms;
                    acting freely, by their own will and in their own interest
                    or in the legitimate interest/representation on behalf of
                    the User and/or on consent/approval of the legal
                    representative, as well as confirming their legal capacity,
                    the User agrees and accepts the terms of the Privacy Policy
                    (hereinafter referred to as the Policy) in relation to
                    Personal Data, laid out in this User Agreement and in this
                    section.
                  </p>
                  <p>
                    The policy laid out in this section of the User Agreement
                    determines: types of Personal Data, methods of obtaining
                    Personal Data, actions performed with Personal Data, the
                    purposes of processing Personal Data, methods of protecting
                    Personal Data, legal grounds for processing Personal Data
                    and other terms regarding processing Personal Data used by
                    Moovy and third parties processing Personal Data.
                  </p>
                  <p>
                    The processing of Personal Data means any action (operation)
                    or a set of actions (operations) performed with Personal
                    Data provided for by this User Agreement, including:
                  </p>
                  <div class="agree-table">
                    <table>
                      <tbody>
                        <tr>
                          <td>№</td>
                          <td>Type of operation</td>
                          <td>Description of the operation</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Collection</td>
                          <td>
                            The process of obtaining Personal Data in the ways
                            established by this User Agreement.
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Recording</td>
                          <td>
                            The process of acquiring Personal Data for storage
                            on digital (electronic) media, as well as the result
                            of this process.
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Accumulation</td>
                          <td>
                            The process of forming an unstructured array of
                            Personal Data in the databases of the Product.
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Systematization</td>
                          <td>
                            The process of organizing Personal Data in
                            accordance with the logic (algorithms) specified in
                            the databases of the Product.
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Storage</td>
                          <td>
                            The process of storing Personal Data on digital
                            (electronic) media in the ways designated for such
                            media in order to ensure appropriate access to them
                            later on.
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Extraction</td>
                          <td>
                            The process of automatic extraction (construction)
                            of structured Personal Data from unstructured or
                            semi-structured Personal Data.
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Analysis</td>
                          <td>
                            The process of researching, filtering, transforming
                            and modeling Personal Data in order to extract
                            useful information and make decisions based on it.
                          </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Clarification</td>
                          <td>
                            The process of changing (updating) Personal Data.
                          </td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>Use</td>
                          <td>
                            The process of utilizing Personal Data for the
                            purposes provided for in the User Agreement.
                          </td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>Depersonalization</td>
                          <td>
                            The process that makes it impossible to establish a
                            connection between Personal Data and a specific User
                            without resorting to additional information.
                          </td>
                        </tr>
                        <tr>
                          <td>11</td>
                          <td>Blocking</td>
                          <td>
                            Temporary suspension of processing Personal Data
                            (except when processing is necessary to clarify
                            Personal Data).
                          </td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>Transfer</td>
                          <td>
                            The process of transferring Personal Data from their
                            place of storage to a third party in the form of a
                            digital bitstream by means of telecommunications
                            over a data transmission channel, by exchanging the
                            data, copying, distributing them, providing access
                            to them for subsequent processing by means of
                            computer technology.
                          </td>
                        </tr>
                        <tr>
                          <td>13</td>
                          <td>Cross-border transfer</td>
                          <td>
                            The transfer of Personal Data to the territory of a
                            foreign state, to the authorities of a foreign
                            state, to a foreign individual or a foreign legal
                            entity.
                          </td>
                        </tr>
                        <tr>
                          <td>14</td>
                          <td>Provision</td>
                          <td>
                            Actions aimed at the transfer of Personal Data to a
                            specific party or parties.
                          </td>
                        </tr>
                        <tr>
                          <td>15</td>
                          <td>Disclosure</td>
                          <td>
                            Actions aimed at the transfer of Personal Data to
                            any number of unspecified parties.
                          </td>
                        </tr>
                        <tr>
                          <td>16</td>
                          <td>Destruction</td>
                          <td>
                            A sequence of actions and operations using software
                            or hardware tools, including physical destruction of
                            physical storage media intended for the irreversible
                            deletion of Personal Data, as a result of which such
                            data is destroyed irrevocably, making it impossible
                            to restore their content.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Moovy and third parties process the User's Personal Data if
                    they are filled in and/or sent by the User on their own via
                    special forms located on the Services and/or obtained with
                    the consent/approval of the User from third-party resources
                    (social media, etc.) where the User is registered or which
                    they use (if it is provided for by the functionality of the
                    Service), and/or directly from the User using feedback forms
                    and/or received with the consent/approval of the User
                    automatically in the form of data (information) from the
                    devices and software used by the User.
                  </p>
                  <p>
                    Moovy processes the User's Personal Data automatically only,
                    using computer equipment and software. In its work, Moovy
                    strives to use modern, up-to-date and at the same time
                    reasonable methods and means utilized in informational,
                    technological and technical systems for processing Personal
                    data.
                  </p>
                  <p>
                    Moovy does not collect or process special categories of
                    Personal Data related to the User’s age, race, nationality,
                    political opinions, religious or philosophical beliefs,
                    medical status, personal life, as well as biometric Personal
                    Data that characterizes the physiological and biological
                    characteristics of the User which can be used to identify
                    them.
                  </p>
                  <p>
                    The Services are not intended for use by persons under 13
                    years of age or other age provided for by the laws of the
                    country of citizenship/affiliation/residence of the User.
                    Moovy does not knowingly collect Personal Information about
                    the age of the User, including personal information from
                    children under 13 years of age. In the event that Moovy
                    discovers that a child under the age of 13 provides Personal
                    Data or personal information, Moovy immediately deletes it.
                    If the legal representative (parent or guardian) is aware
                    that a person under the age of 13 or other age of legal
                    capacity has provided Personal Data or other personal
                    information, they may contact Moovy so that the necessary
                    steps can be taken.
                  </p>
                  <p>
                    Moovy strives to ensure that the Users’ interaction with the
                    Website and Services is as informative as possible and meets
                    the interests of the Users. Therefore, Moovy considers it
                    important to notify Users that Moovy and third party service
                    providers (services) with which Moovy cooperates (such as
                    Google Analytics by Google Inc.) process or may process
                    Cookies and similar technologies and that the User needs to
                    know which Cookies are processed and for what purposes. This
                    will help toward protecting the User's Personal Data. More
                    information about the processing of Cookies can be found in
                    this section and in the COOKIE NOTICE section of this User
                    Agreement.
                  </p>
                  <p>
                    In the process of processing Personal Data, Moovy uses a
                    specialized external third-party Google Analytics service by
                    Google Inc. to analyze the actions of Users on the Services.
                    This information is provided to Moovy from the Google
                    Analytics service in the form of Anonymized Data, and is
                    processed by Moovy for the purposes provided for by this
                    Policy.
                  </p>
                  <p>
                    Moovy recommends that the User independently familiarize
                    themselves with the terms of service of Google Analytics and
                    the technologies used by Google Inc. when collecting and
                    processing Personal Data of the Subject (<a
                      href="https://policies.google.com/technologies/partner-sites"
                      >https://policies.google.com/technologies/partner-sites</a
                    >
                    ), including Cookies (<a
                      href="https://policies.google.com/technologies/cookies"
                      >https://policies.google.com/technologies/cookies</a
                    >
                    ), and their obligations to protect privacy and security of
                    the data obtained through the Google Analytics service, as
                    well as the ways to manage one’s privacy modes (<a
                      href="https://support.google.com/analytics/answer/6004245"
                      >https://support.google.com/analytics/answer/6004245</a
                    >
                    ).
                  </p>
                  <p>
                    In order for Users to make payments or other transactions
                    for paid and/or restricted resources of the Service via the
                    Internet, Moovy suggests that the User use dedicated Payment
                    services or other third-party resources provided on (built
                    into) the pages of the relevant Services.
                  </p>
                  <p>
                    In the process of making a payment or other transaction
                    through the Payment Services or other third-party resources
                    offered by Moovy as a payment or transaction tool, the
                    Payment Service or other resource may process Payment
                    Information or other information provided by the User for
                    the purposes provided for in this Policy and/or other
                    information on the terms and for the purposes provided by
                    the service.
                  </p>
                  <p>
                    Depending on the country (region), legislation and technical
                    availability, Moovy may choose to use the services of
                    different Payment Services, therefore, it is recommended
                    that the User independently familiarize themselves with the
                    terms of the proposed Payment Service, the technologies used
                    by such a service, the legal bases it operates on when
                    processing payments, the matters of collection and
                    processing of the User’s Personal Data, and their
                    obligations to protect the confidentiality and security of
                    data received through their Payment Service; Users are
                    encouraged to analyze the information received and make
                    their own decision on whether to use or not to use the
                    suggested Payment Service.
                  </p>
                  <p>
                    Moovy never processes the User’s Payment Information in its
                    normal operation, except for information received from the
                    Users in relation to the orders made by them, and
                    information from the Payment Services about any completed or
                    rejected transactions carried out by the Users in relation
                    to specific orders.
                  </p>
                  <p>
                    The table below describes the categories and types of
                    Personal Data, as well as the purposes of collecting and
                    processing Personal Data performed by Moovy or third parties
                    when the User uses the Website and/or its Services:
                  </p>
                  <div class="agree-table">
                    <table>
                      <tr>
                        <td>№</td>
                        <td>Category of Personal Data</td>
                        <td>Types of Personal Data</td>
                        <td>
                          <p>
                            - For Registration/Authorization, as well as
                            creating an Account;
                          </p>
                          <p>
                            - To identify the owner of the Account and protect
                            the Account when the User Authorizes and/or logs in;
                          </p>
                          <p>
                            - To provide the User with access to certain
                            Services, including personalized ones, such as the
                            Personal Profile and/or Account;
                          </p>
                          <p>
                            - To provide the Service in a specific localization
                            language, if such a language is supported by the
                            Services (English is the default setting);
                          </p>
                          <p>
                            - To provide the User with special offers, Services,
                            newsletters and other information on behalf of and
                            on the recommendation of Moovy;
                          </p>
                          <p>
                            - To run contests, sweepstakes and other promotions,
                            which can be run by Moovy and/or its partners and/or
                            third parties;
                          </p>
                          <p>
                            - To conduct surveys and research in order to
                            improve the quality of the Services or services
                            provided, control the results of marketing
                            campaigns, control User satisfaction and the quality
                            of services provided through the Services;
                          </p>
                          <p>
                            - To send advertising, news and information mailings
                            to the Subject from Moovy or third parties;
                          </p>
                          <p>- To promote Moovy products and services;</p>
                          <p>
                            - To prevent or suppress actions of the User or
                            third parties that are illegal and/or unauthorized
                            and/or prohibited by Moovy;
                          </p>
                          <p>
                            - To establish communication with the User,
                            including sending notifications, requests and
                            payment information regarding the use of the Product
                            and/or its Services, as well as to provide services
                            and process requests and claims from the User, and
                            provide customer support;
                          </p>
                          <p>
                            - To conclude and execute the present User Agreement
                            or a separate license agreement and/or other
                            agreement/transaction concluded in the form of an
                            offer or otherwise legally between the Parties;
                          </p>
                          <p>
                            - To ensure compliance with legal requirements or
                            the User Agreement;
                          </p>
                          <p>
                            - To prevent or suppress illegal and/or unauthorized
                            actions of Users or third parties;
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>User Data</td>
                        <td>
                          <p>
                            - order information (order details, payment status,
                            transaction date/time, payment amount, payment
                            method, payment purpose and used bonuses);
                          </p>
                          <p>
                            - data contained in messages submitted through the
                            Services feedback form;
                          </p>
                          <p>
                            - device location information (depending on device
                            settings);
                          </p>
                          <p>- device IP address;</p>
                        </td>
                        <td>
                          <p>
                            - To enable Users to interact (exchange information)
                            with other Users;
                          </p>
                          <p>
                            - To ensure proper operation (functioning) and/or
                            use of the functionality of the Services;
                          </p>
                          <p>
                            - To synchronize data when operating on multiple
                            devices simultaneously and across multiple Services;
                          </p>
                          <p>- To confirm payments made by the User;</p>
                          <p>
                            - To process incoming requests from the User with
                            the view of providing assistance, technical support
                            and customer support in regard to the User’s use of
                            the Services or any issues arising from their use;
                          </p>
                          <p>
                            - To ensure compliance with legal requirements or
                            the User Agreement;
                          </p>
                          <p>
                            - To prevent or suppress illegal and/or unauthorized
                            actions of Users or third parties;
                          </p>
                          <p>- To expand the scope of Services provided;</p>
                          <p>
                            - To check the information for compliance with the
                            User Agreement;
                          </p>
                          <p>
                            - To confirm the accuracy and integrity of the
                            Personal and other information provided by the User;
                          </p>
                          <p>
                            - To suppress or prevent violation of the User
                            Agreement and/or damage to the Website;
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Payment Information</td>
                        <td>Crypto Wallet Address</td>
                        <td>
                          <p>- To enable User payments;</p>
                          <p>- To confirm User payments;</p>
                          <p>
                            - For other purposes provided for by the relevant
                            Payment Services;
                          </p>
                          <p>
                            - To ensure compliance with legal requirements or
                            the User Agreement;
                          </p>
                          <p>
                            - To prevent or suppress illegal and/or unauthorized
                            actions of Users or third parties;
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Cookies</td>
                        <td>
                          <p>- small text fragments;</p>
                          <p>- files</p>
                          <p>- pixel tags;</p>
                          <p>- web beacons;</p>
                          <p>- device fingerprints;</p>
                        </td>
                        <td>
                          <p>
                            - To make the User's interaction with the Website
                            and the Services more efficient;
                          </p>
                          <p>
                            - To obtain statistical and analytical data on the
                            use of the Website and the Services in order to
                            improve their functioning;
                          </p>
                          <p>- To receive and process Anonymized Data;</p>
                          <p>
                            - For other purposes provided for by the relevant
                            service providers (services) with which Moovy
                            cooperates;
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Anonymized Data</td>
                        <td>
                          <p>
                            - information about the actions of Users on the
                            Service, such as: tracking page hits and
                            interactions with the Website interface;
                          </p>
                          <p>
                            - information about the device used to access the
                            Services (brand and type of the device used, screen
                            resolution, any device identifiers, and the IP
                            address of the device);
                          </p>
                          <p>
                            - information about the browser used on the device,
                            as well as the type and version of the operating
                            system installed of the device;
                          </p>
                          <p>
                            - information about the current location of the
                            device (depending on device settings);
                          </p>
                          <p>
                            - source: determining where the user came to the
                            Website from, from which specific site or ad;
                          </p>
                        </td>
                        <td>
                          <p>
                            - To analyze the performance of the Services with
                            the view of improving their quality;
                          </p>
                          <p>
                            - To develop and deliver new Service updates and
                            modifications to the Users;
                          </p>
                          <p>
                            - To analyze the actions of Users on the Services;
                          </p>
                          <p>
                            - To obtain statistical and analytical data useful
                            for improving the performance of the Services;
                          </p>
                          <p>
                            - To produce statistical reports for marketing
                            purposes;
                          </p>
                          <p>
                            - To determine the location of the Subject to ensure
                            security and prevent fraud;
                          </p>
                          <p>
                            - To enable other third parties acting on behalf of
                            Moovy to process this data;
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <p>
                    In view of the availability of the Website and/or its
                    Services in different regions and countries and the need for
                    decentralized management of information databases related to
                    the Website, Moovy has the right to entrust the processing
                    of Personal Data to its Affiliates, while these companies
                    are obliged to comply with the principles and rules for the
                    processing of Personal Data provided for by this User
                    Agreement and/or separate license agreements and/or other
                    agreements/contracts concluded with the User in the form of
                    an offer or in another legal way as well as the laws of the
                    country of registration of these companies.
                  </p>
                  <p>
                    Moovy and its Affiliates have the right to process Personal
                    Data personally or entrust the processing of Personal Data
                    to a third party, based on a contract concluded with that
                    third party or on other legal grounds. The third party
                    processing Personal Data on their behalf is obliged to
                    comply with the principles and rules for the processing of
                    Personal Data provided for by this User Agreement and
                    federal laws. Moovy's instructions to this third party must
                    define: a list of actions (operations) with Personal Data
                    that will be performed by the third party processing
                    Personal Data as well as the purposes of processing, the
                    obligation of such a third party to maintain the
                    confidentiality of Personal Data and ensure the security of
                    Personal Data during their processing. Requirements for the
                    protection of the Personal Data under processing must also
                    be specified.
                  </p>
                  <p>
                    The procedure for collecting, storing, transferring and
                    other types of processing of Personal Data, the security of
                    Personal Data processed by Moovy is ensured by implementing
                    the legal, organizational and technical measures necessary
                    to fully comply with the requirements of the current
                    legislation in the field of Personal Data protection. Moovy
                    takes all the necessary measures to protect and preserve the
                    User's Personal Data from unauthorized access by third
                    parties. Moovy values the User's trust expressed in
                    providing Moovy with their personal information. Therefore,
                    Moovy strives to use commercially reasonable means of
                    protecting it. However, Moovy points out that no method of
                    transmitting information over the Internet or method of
                    electronic storage is 100% safe and reliable, and Moovy
                    cannot guarantee its absolute safety. In the event of a
                    breach of Moovy's security measures used in the processing
                    of Personal Data that may result or is highly likely to
                    result in the violation of the User's rights, Moovy is
                    obliged to notify the User no later than 72 hours after the
                    discovery of such breach.
                  </p>
                  <p>
                    Moovy has the right to carry out Cross-Border Transfer of
                    the User's Personal Data. Prior to the start of the
                    Cross-Border Transfer of Personal Data, Moovy is obliged to
                    make sure that the foreign state to which the transfer of
                    Personal Data is supposed to be carried out provides
                    reliable protection of the rights of Personal Data subjects.
                    Cross-border Transfer of Personal Data to the territory of
                    foreign states that do not meet the above requirements can
                    be carried out only with the User’s written consent to the
                    Cross-Border Transfer of their Personal Data and/or in case
                    of the execution of an agreement to which the User is a
                    party.
                  </p>
                  <p>
                    Moovy sets as its most important goal and condition for the
                    implementation of its activities the observance of the
                    personal and civil rights and freedoms in the processing of
                    the Users’ Personal Data, including the protection of the
                    rights to privacy and inviolability of personal and family
                    secrets. Moovy maintains the confidentiality of Users'
                    Personal Data. This means that Users' Personal Data is not
                    sold or transferred to third parties without legal grounds,
                    such as: implementation of the current legislation, official
                    requests from authorized state bodies, the consent of the
                    User, and the execution of this User Agreement. The User
                    independently bears the risks of disclosing their Personal
                    Data in case of voluntary provision of such information
                    about themselves for general access to an unlimited number
                    of persons.
                  </p>
                  <p>
                    Personal Data is processed for the period necessary to
                    achieve the Purposes of Personal Data processing, or until
                    the User or their legal representative and/or their heir
                    (legal successor) withdraws consent to its processing. Upon
                    achievement of the Purposes of Personal Data processing or
                    upon withdrawal of consent to their processing, Personal
                    Data shall be destroyed, unless otherwise provided by law
                    and/or agreement to which the User is a party (beneficiary),
                    while Moovy has the right to continue processing Personal
                    Data without the consent of the User if grounds for this are
                    provided for by the current legislation and/or this User
                    Agreement and/or the terms of a separate license agreement
                    and/or other agreement/contract concluded between the
                    Parties in the form of an offer or in another legal way.
                  </p>
                  <p>
                    This Policy has been drawn up taking into account the
                    interests of Users located in different countries. Moovy has
                    also tried to take into account other requirements governing
                    the processing of Personal Data. In its work, Moovy strives
                    to comply with all modern standards related to the
                    requirements for the processing and protection of Personal
                    Data. However, due to the diversity of these standards
                    across the world, Moovy cannot guarantee full compliance of
                    its Policy with the standards in the field of protection and
                    processing of Personal Data established by a particular
                    region (country).
                  </p>
                  <p>
                    If the User does not agree with the current Policy, they may
                    forgo the use of the Website and/or its Services.
                  </p>
                  <p>
                    This User Agreement will reflect any changes to the Personal
                    Data Processing Policy, which is valid indefinitely until
                    replaced by a new version.
                  </p>
                </div>
                <div class="formacar">
                  <p>© 2022 Moovy Gem FZE. All rights reserved. 18+</p>
                </div>
              </div>
            </div>
            <div
              class="reviews-min-block-js"
              data-catalog="notice"
              v-if="activeSection === 'notice'"
            >
              <div class="section-user__main">
                <h1>COOKIE NOTICE</h1>
                <div class="section-the-user">
                  <p>
                    The terms laid out in this section and the PRIVACY POLICY
                    section of this User Agreement apply to the use of Cookies
                    by Moovy and its Affiliates when the User uses the Website.
                  </p>
                  <p>
                    Cookies are small text files and other similar technologies,
                    such as pixel tags, web beacons and device fingerprints,
                    that are stored on the User's device (a computer or a mobile
                    device) in the process of interaction with the Website, and
                    are necessary to improve its efficiency.
                  </p>
                  <p>
                    Cookies are necessary to remember the User's preferences in
                    search queries, in order to select information and
                    advertisements that would be useful for them. They simplify
                    (automate) the User's actions, make it possible to track the
                    number of visits and actions of the User on the Product
                    Services, are used to create a personalized User experience
                    from interacting with the Services, to evaluate the
                    effectiveness of advertising campaigns, and allow Moovy to
                    further improve the quality of the Services.
                  </p>
                  <p>
                    Moovy may receive analytical and statistical data and other
                    reports based on the use of Cookies by specialized
                    third-party analytics services, such as Google Analytics by
                    Google Inc., either on an individual basis or in aggregate
                    form based on Anonymized Data. Moovy may also partner with
                    third parties to place and distribute advertisements on the
                    resources of the Website, using information from Cookies to
                    manage advertising content. Moovy draws the attention of
                    Users to the fact that the principles and methods of using
                    Cookies in the operation of such services may change at some
                    point, therefore it is the responsibility of the User to
                    receive timely and up-to-date information about the
                    principles and methods of using Cookies by such services.
                  </p>
                  <p>
                    The User's browser may store all of the listed types of
                    Cookies or only some of them. The User may disable certain
                    types of Cookies; however, this may affect the functionality
                    of the Services and their operation. It can be done in the
                    settings of the services of the User’s browser at any time.
                    Moovy recommends that the User independently familiarize
                    themselves with the information on how to disable Cookies or
                    change the Cookie settings for their browser (this function
                    may not be available on mobile devices) by clicking on the
                    following links:
                  </p>
                  <ul class="ul-keterov">
                    <li>
                      Google Chrome:
                      <a
                        href="https://support.google.com/chrome/answer/95647?hl=en"
                        >https://support.google.com/chrome/answer/95647?hl=en</a
                      >
                      Firefox:
                      <a
                        href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                        >https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences</a
                      >
                    </li>
                    <li>
                      Internet Explorer:
                      <a
                        href="http://windows.microsoft.com/en-GB/windows-vista/Block-or-allow-cookies"
                        >http://windows.microsoft.com/en-GB/windows-vista/Block-or-allow-cookies</a
                      >
                    </li>
                    <li>
                      Safari:
                      <a href="http://help.apple.com/safari/mac/8.0/#/sfri11471"
                        >http://help.apple.com/safari/mac/8.0/#/sfri11471</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="formacar">
                  <p>© 2022 Moovy Gem FZE. All rights reserved. 18+</p>
                </div>
              </div>
            </div>
            <div
              class="reviews-min-block-js"
              data-catalog="consent"
              v-if="activeSection === 'consent'"
            >
              <div class="section-user__main">
                <h1>CONSENT TO PROCESSING OF PERSONAL DATA</h1>
                <div class="section-the-user">
                  <p>
                    Entering into (accepting) this User Agreement via direct use
                    of the Services, viewing information, etc. including, but
                    not limited to: the Website, Services and feedback forms,
                    acting freely, by their own will and in their own interest
                    or in a legitimate interest/representation on behalf of the
                    User and/or consent/approval of a legal representative, as
                    well as confirming their legal capacity to conclude the User
                    Agreement, the User accepts these terms and gives their
                    unconditional consent to Moovy to process their Personal
                    Data, as well as any other information provided by the User
                    and/or received by Moovy, on the terms provided for by this
                    User Agreement, including PRIVACY POLICY and COOKIE NOTICE
                    sections.
                  </p>
                  <p>
                    This consent is valid for the entire period of time
                    necessary to achieve the Purposes of Personal Data
                    processing or until the User revokes their consent by
                    sending a written request to Moovy by e-mail:
                    support@moovy.io.
                  </p>
                </div>
                <div class="formacar">
                  <p>© 2022 Moovy Gem FZE. All rights reserved. 18+</p>
                </div>
              </div>
            </div>
            <div
              class="reviews-min-block-js"
              data-catalog="user-rights"
              v-if="activeSection === 'user-rights'"
            >
              <div class="section-user__main">
                <h1>USER RIGHTS AND RESPONSIBILITIES</h1>
                <div class="section-the-user">
                  <p>The User has the right to:</p>
                  <ul class="ul-keterov">
                    <li>
                      Use the Website and the functionality of the Services for
                      the purposes provided for by the Services in accordance
                      with the terms of this User Agreement and/or the terms of
                      a separate license agreement and/or other
                      agreement/contract concluded between the Parties in the
                      form of an offer or in another legal way.
                    </li>
                    <li>
                      Participate in contests and promotions held by Moovy in
                      the manner provided for by the terms of such contests and
                      promotions.
                    </li>
                    <li>
                      Send inquiries to Moovy about the conclusion and execution
                      of this User Agreement.
                    </li>
                  </ul>
                  <p>The User undertakes:</p>
                  <ul class="ul-keterov">
                    <li>
                      To act solely in accordance with the User Agreement and
                      other agreements concluded between the Parties, as well as
                      be fully responsible for their own action and failure to
                      act when using the Services.
                    </li>
                    <li>
                      To use the available Services solely for the purposes for
                      which such Services are intended by Moovy, in accordance
                      with the laws of the country of
                      affiliation/citizenship/residence. The User is prohibited
                      from using the Services, as well as any information
                      received on the Service for unintended purposes.
                    </li>
                    <li>
                      Not to use, distribute, copy and/or extract any materials,
                      information or Content from the Website, either manually
                      or automatically (using software tools) without the
                      permission of Moovy.
                    </li>
                    <li>
                      Not to take any action that could lead to a
                      disproportionately large load on the infrastructure of the
                      Website.
                    </li>
                    <li>
                      Not to copy, reproduce, modify, distribute or make
                      publicly available any information contained in the
                      Services (other than the Information provided by the User
                      themselves) without a prior written permission of Moovy.
                    </li>
                    <li>
                      Not to interfere with the operation of the Website and
                      automatic systems or processes in order to block or
                      restrict access to the Website.
                    </li>
                  </ul>
                  <p>The User has no right to:</p>
                  <ul class="ul-keterov">
                    <li>
                      Collect and store Personal Data of other persons without
                      authorization;
                    </li>
                    <li>Disrupt the normal operation of the Services;</li>
                    <li>
                      Facilitate actions aimed at violating the restrictions and
                      prohibitions imposed by the User Agreement, inciting to
                      commit illegal actions, as well as assisting persons whose
                      actions are aimed at violating restrictions and
                      prohibitions;
                    </li>
                    <li>
                      Otherwise violate the law, including international law;
                    </li>
                    <li>
                      Sell, license or sub-license, rent out or transfer the
                      Services to third parties;
                    </li>
                    <li>
                      Translate the Services into other languages, modify,
                      decompile, dismantle, disassemble them into individual
                      components, modify the Services, reverse engineer them,
                      alter, decrypt and perform other actions with the object
                      code and source text of the Services with any purposes,
                      including obtaining information about the implementation
                      of the algorithms used in the software product and
                      creating derivative software products utilizing the
                      capabilities of the Services;
                    </li>
                    <li>
                      Combine or distribute the Services in compilations or
                      other similar distribution options;
                    </li>
                    <li>
                      Use the Services without reaching the required age and/or
                      lacking the necessary rights established by the
                      laws/requirements/regulations of the country of
                      citizenship/affiliation/residence of the User or at the
                      request/by the decision of Moovy.
                    </li>
                  </ul>
                  <p>
                    User’s failure to comply with the prohibitions provided for
                    by this User Agreement entails the immediate and automatic
                    termination of this agreement, and may also result in
                    criminal and civil liability for the User.
                  </p>
                </div>
                <div class="formacar">
                  <p>© 2022 Moovy Gem FZE. All rights reserved. 18+</p>
                </div>
              </div>
            </div>
            <div
              class="reviews-min-block-js"
              data-catalog="warranties"
              v-if="activeSection === 'warranties'"
            >
              <div class="section-user__main">
                <h1>WARRANTIES AND LIABILITIES</h1>
                <div class="section-the-user">
                  <p>
                    The User and/or their legal representative is responsible
                    for the actions performed on the Services, including the
                    liability for violation of the rights of third parties.
                  </p>
                  <p>
                    The Service is a tool that enables Users to receive
                    information. At the same time, Moovy cannot always guarantee
                    that the information posted on the Website complies with the
                    laws of the User's country. Thus, the quality, security and
                    legality of the information posted on the Website is beyond
                    the control of Moovy. Therefore, Moovy is not responsible
                    for the content of the information provided to the User.
                  </p>
                  <p>
                    Given the principles of structure and operation of the
                    Internet, the Services are provided "as is", which means
                    that Moovy does not provide any guarantees regarding the
                    Services. In particular, Moovy does not guarantee to the
                    User that:
                  </p>
                  <ul class="ul-keterov">
                    <li>
                      The Services, their direct or indirect effect and quality
                      will meet the requirements, goals and expectations of the
                      User;
                    </li>
                    <li>
                      The Services will be provided continuously, reliably and
                      without errors and/or will be available to the User;
                    </li>
                    <li>
                      The results that will be obtained through the use of the
                      Services will be accurate, reliable and meet the User's
                      expectations;
                    </li>
                    <li>
                      The Website and/or its Services will function/work and be
                      updated on the User's devices and/or for the software of
                      such devices.
                    </li>
                  </ul>
                  <p>
                    Moovy and the User hereby declare and warrant to each other
                    that, as of the date and for the duration of the User
                    Agreement, each of them:
                  </p>
                  <ul class="ul-keterov">
                    <li>
                      Has the powers necessary to enter into this User Agreement
                      and fulfill the obligations assumed under the User
                      Agreement;
                    </li>
                    <li>
                      Took all the actions necessary for the conclusion and
                      execution of the User Agreement, and to ensure that the
                      User Agreement is legal, binding on them and enforceable
                      in relation to their counterparty;
                    </li>
                    <li>
                      To the best of their knowledge, there are no unresolved
                      legal issues, threats of litigation or other circumstances
                      that may have negative consequences for the party to the
                      User Agreement or its activities, the party to the User
                      Agreement has not violated any material provisions of any
                      contract or other agreement concluded by it, there are no
                      rulings and decisions of the court, arbitration court or
                      other state agency that may have a negative impact on the
                      position of the party to the User Agreement or its
                      activities;
                    </li>
                    <li>
                      There are property-related obligations and no provisions
                      in legislation or other regulations, in contracts binding
                      on a party to the User Agreement that may violate or
                      prevent the signing or execution of the User Agreement;
                    </li>
                    <li>
                      Fulfillment of obligations under the User Agreement is an
                      unconditional obligation of the party to the User
                      Agreement, which has at least the same priority as other
                      obligations of the party to the User Agreement;
                    </li>
                    <li>
                      All documents and information provided by a party to the
                      User Agreement to the other party in connection with this
                      User Agreement are authentic, factually correct, complete
                      and accurate in all respects, and the party to the User
                      Agreement does not conceal any facts that, should they
                      become known, could adversely influence the decision of
                      the other party to the User Agreement to enter into this
                      agreement;
                    </li>
                    <li>
                      Has sufficient information about their counterparty to the
                      extent necessary to select it as such, to understand that
                      it has sufficient resources to fulfill its obligations
                      under the User Agreement;
                    </li>
                    <li>
                      The obligations of the party to the User Agreement under
                      this agreement are legal, valid, current and binding on
                      the party to the User Agreement, subject to execution in
                      accordance with the provisions of the User Agreement;
                    </li>
                  </ul>
                  <p>
                    Each party hereby acknowledges that it is entering into the
                    User Agreement in reliance on the representations and
                    warranties which are provided by the other party and
                    material to it.
                  </p>
                </div>
                <div class="formacar">
                  <p>© 2022 Moovy Gem FZE. All rights reserved. 18+</p>
                </div>
              </div>
            </div>
            <div
              class="reviews-min-block-js"
              data-catalog="limitation"
              v-if="activeSection === 'limitation'"
            >
              <div class="section-user__main">
                <h1>LIMITATION OF LIABILITY</h1>
                <div class="section-the-user">
                  <p>
                    Moovy does not bear any responsibility for any direct and/or
                    indirect consequences of any use or inability to use the
                    Services and/or losses (including real damages, lost
                    profits) caused to the User and/or third parties as a result
                    of any use, non-use or inability to use the Services or
                    their individual components and/or functions, including the
                    cases when it happens due to possible errors or malfunctions
                    of the Services.
                  </p>
                  <p>
                    The Parties accept the fact that in case of the Services
                    based on the data/services/licenses of third-party services
                    unrelated to the Website that are reproduced on the Website,
                    Moovy does not determine or control the volume, quality and
                    timeliness of the provision to the User of such Services.
                    Therefore, Moovy does not bear responsibility to the Users
                    for such Services in case of failures in their operation.
                  </p>
                  <p>
                    The User who discovers a defect or a software error in the
                    course of using the Services is obliged to immediately
                    inform Moovy about this fact, indicating the specific
                    actions performed by the User immediately before such
                    discovery. In the event that the User fails to fulfill the
                    obligations specified in this paragraph, and/or uses the
                    defect or a software error for their own purposes, including
                    profit extraction and disclosure of the existence or nature
                    of the error to third parties (hereinafter referred to as
                    the misuse of a software error), this User Agreement with
                    the User shall be deemed terminated from the moment of such
                    misuse of a software error, and the User may be held liable.
                  </p>
                  <p>
                    The User agrees that Moovy is not responsible for possible
                    losses caused to the User in connection with the adoption of
                    measures to prevent or stop violations on the Services
                    related to the restriction/blocking of IP addresses and the
                    Users' access to the Services.
                  </p>
                  <p>
                    Moovy shall not be liable for non-fulfillment or
                    difficulties in fulfilling obligations due to force majeure
                    circumstances, the consequences of which cannot be avoided
                    or overcome.
                  </p>
                  <p>
                    The User accepts and agrees that the
                    data/content/information provided on the Services can be
                    used by any third parties for purposes other than the
                    purposes such information has been posted on the Website,
                    without any influence and control on the part of Moovy. In
                    this regard, Moovy is not responsible for the use of
                    data/content/information posted on the Service by other
                    persons and/or automated systems (robots) without the
                    knowledge and/or consent of Moovy.
                  </p>
                  <p>
                    The User accepts and agrees that the
                    data/Content/information provided by Moovy on the Services,
                    including news, may be available via the access to the
                    Internet anywhere in the world, while they may not
                    correspond to ethics, morality, reality, relevance,
                    age-based and other restrictions, laws/decrees of the
                    country of citizenship/affiliation/residence of the User.
                    Therefore, Moovy is not responsible for the content of such
                    information, and its obtaining and/or use by the User is
                    carried out independently at their own risk or under the
                    control of the legal representative of the User and/or with
                    their approval.
                  </p>
                  <p>
                    Moovy shall not be liable for non-fulfillment or
                    difficulties in fulfilling obligations due to force majeure
                    circumstances, the consequences of which cannot be avoided
                    or overcome.
                  </p>
                  <p>
                    Moovy shall not be liable to the User for termination of
                    activity/functioning and/or restriction of access to the
                    Website and/or its Services, whatever it may be caused by:
                    the decision of state authorities, of Moovy itself and/or of
                    its Copyright Holders, or circumstances beyond the control
                    of the Parties.
                  </p>
                  <p>
                    Moovy shall not be liable to the User for termination of
                    activity/operation and/or availability/absence of updates of
                    the Website and/or its Services on the User's devices and/or
                    for the software of such devices.
                  </p>
                  <p>
                    Under any circumstances, Moovy's liability arising from the
                    terms of this User Agreement is limited to the total amount
                    of funds received by Moovy from the User for the granted
                    right to use the relevant Services.
                  </p>
                </div>
                <div class="formacar">
                  <p>© 2022 Moovy Gem FZE. All rights reserved. 18+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
  import { ref, watch } from 'vue';
  import { onClickOutside } from '@vueuse/core';

  const target = ref(null);

  onClickOutside(target, () => (isMenuVisible.value = false));

  const activeSection = ref('user-agree');

  watch(activeSection, () => {
    isMenuVisible.value = false;
  });

  const setActiveSection = (value) => {
    activeSection.value = value;
  };
  const isMenuVisible = ref(false);
  const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
  };
</script>
<style scoped>
  .logo {
    width: 148px;
    display: block;
  }
  .logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .fon-agreement {
    background: #ffffff !important;
    width: 100%;
  }

  .for-head {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #000000;
    padding: 15px 15px;
    z-index: 999;
    height: 63px;
    display: flex;
    align-items: center;
  }

  .menu-fix {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100%;
    z-index: 99;
    background: #000000;
  }

  .agreement__cnt {
    margin-left: 300px;
    padding-top: 100px;
  }

  .menu-fix ul {
    padding: 90px 25px 20px 0;
  }

  .menu-fix ul li {
    color: #ffffff;
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 10px;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    position: relative;
    padding-left: 15px;
  }

  .menu-fix ul li:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background: #21e7d6;
    opacity: 0;
    transition: 0.3s;
  }

  .menu-fix ul .active-href {
    color: #21e7d6;
  }

  .menu-fix ul .active-href:before {
    opacity: 1;
  }

  .agreement__cnt h1 {
    font-weight: 500;
    font-size: 45px;
    line-height: 57px;
    text-transform: uppercase;
    color: #000000;
    text-shadow: unset;
  }

  .section-the-user {
    margin-top: 25px;
    border-top: 1px solid #000000;
    padding-top: 25px;
  }

  .section-the-user strong {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    text-transform: uppercase;
    color: #000000;
    display: block;
    text-align: center;
  }

  .style-number {
    padding-left: 20px;
    margin-left: 40px;
    list-style: auto;
  }

  .section-the-user ul {
    margin-top: 25px;
  }

  .section-the-user ul li {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-top: 20px;
  }

  .section-the-user .style-number li {
    margin-top: 5px;
  }

  .section-the-user p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-top: 20px;
  }

  .formacar {
    margin: 30px 0;
  }

  .formacar p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
  }

  .section-the-user p a {
    color: #007bff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .table-police,
  .agree-table {
    margin: 25px 0;
  }

  .agree-table table tr {
    border: 1px solid #000000;
  }

  .agree-table table tr td {
    border-bottom: 1px solid #000000;
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
  }

  .agree-table table tr td + td {
    border-left: 1px solid #000000;
  }

  .agree-table table tr td:nth-child(1) {
    width: 40px;
  }

  .agree-table table tr td:nth-child(2) {
    width: 180px;
  }

  .close-filter-in-mob {
    display: none;
  }

  .catalog-filter-close {
    display: none;
  }

  .body__fon__active {
    overflow: hidden !important;
  }

  .body__fon__active:after {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }

  .ul-keterov {
    list-style: disc;
    padding-left: 25px;
  }

  @media (max-width: 1440px) {
    .agree-table {
      overflow-x: scroll;
      padding-bottom: 15px;
    }

    .agree-table table {
      width: 950px;
    }
  }

  @media (max-width: 1199px) {
    .catalog-filter-close {
      display: flex;
      position: absolute;
      top: 10px;
      right: 10px;
      width: 16px;
      height: 16px;
    }

    .catalog-filter-close svg {
      width: 100%;
      height: 100%;
    }

    .catalog-filter-close svg path {
      stroke: #21e7d6;
      fill: #21e7d6;
    }

    .menu-fix {
      position: fixed;
      top: 0;
      left: -280px;
      overflow: auto;
      visibility: hidden;
      transition: 0.4s;
      width: 280px;
      height: 100%;
      z-index: 99999;
    }

    .for__filter__active {
      visibility: visible;
      transition: 0.5s;
      left: 0;
    }

    .close-filter-in-mob {
      display: flex;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .close-filter-in-mob svg {
      width: 35px;
      height: 35px;
    }

    .close-filter-in-mob svg path {
      fill: #21e7d6;
    }

    .close-filter-in-mob span {
      margin-left: 10px;
      display: block;
      color: #000000;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
    }

    .agreement__cnt {
      margin-left: 0;
      padding-top: 80px;
    }

    .menu-fix ul {
      padding: 60px 20px 20px 0;
    }

    .agreement__cnt h1 {
      font-size: 38px;
      line-height: 50px;
    }
  }

  @media (max-width: 570px) {
    .agreement__cnt h1 {
      font-size: 26px;
      line-height: 36px;
    }

    .section-the-user strong {
      font-size: 18px;
      line-height: 32px;
    }

    .style-number {
      padding-left: 25px;
      margin-left: 0;
    }

    .section-the-user p a {
      display: block;
      overflow: hidden;
    }

    .section-the-user {
      margin-top: 21px;
      padding-top: 20px;
    }
  }
</style>