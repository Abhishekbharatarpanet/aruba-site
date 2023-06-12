
<?php include 'includes/header.php' ?>

<main>
    <!-- breadcrumb area start -->
    <div class="breadcrumb-area jarallax" style="background-image:url(assets/img/bg/1.png);">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h1 class="page-title">Contact Us</h1>
                        <ul class="page-list">
                            <li><a href="index.html">Home</a></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb area End -->

    <!-- contact area End -->
    <div class="contact-area pd-top-108 pd-bottom-50" id="contact_msg_view">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section-title text-lg-center text-left">
                        <h2 class="title">Get In Touch!</h2>
                        <p>Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus amet eligendi earum, mollitia eaque explicabo cum! Ipsum hic sed at.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <form class="tp-form-wrap" id="form_contact">
                        <div class="row">
                            <div class="col-md-6">
                                <label class="single-input-wrap style-two">
                                    <span class="single-input-title">Name</span>
                                    <input class="stop_cp" type="text" id="name" name="name" required autocomplete="off">
                                    <span id="name_err" class="error"></span>
                                </label>
                            </div>
                            <div class="col-md-6">
                                <label class="single-input-wrap style-two">
                                    <span class="single-input-title">Email</span>
                                    <input class="stop_cp" type="email" id="emailid" name="emailid" required autocomplete="off">
                                    <span id="emailid_err" class="error"></span>
                                </label>
                            </div>
                            <div class="col-md-6">
                                <label class="single-input-wrap style-two">
                                    <span class="single-input-title">Confirm Email</span>
                                    <input class="stop_cp" type="email" id="confirm_email" name="emailConfirm" equalTo='#emailid'  equals="emailid" err="Confirm email must be the same as email" required  autocomplete="off"/>
                                    <span id="confirm_email_err" class="error"></span>
                                </label>
                            </div>
                            <div class="col-md-6 ">
                                <label class="single-input-wrap contactNumber style-two">
                                    <span class="single-input-title">Mobile Number</span>
                                    <input type="number" id="phoneno" name="phoneno" required autocomplete="off" class="stop_cp">
                                    <span id="phoneno_err" class="error"></span>
                                </label>
                            </div>
                            <div class="col-lg-12">
                                <label class="single-input-wrap style-two">
                                    <span class="single-input-title">Message</span>
                                    <textarea name="message" id="message"  autocomplete="off" required class="stop_cp"></textarea>
                                    <span id="message_err" class="error"></span>
                                </label>
                            </div>
                            <div class="col-md-6">
                                <label class="single-input-wrap style-two">
                                    <span class="single-input-title">Answer sum of <span id="ans1">7</span> + <span id="ans2">8</span> = ?</span>
                                    <input type="text" required name="answer" id="answer" autocomplete="off" class="stop_cp" />
                                    <span id="answer_err" class="error"></span>
                                </label>
                            </div>
                            <div class="col-md-6 text-right mt-3 sm-text-center">
                                <span id="contactsuccessstatus" style="color:green;"></span>
                                <span id="contacterrstatus" style="color:red;"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button class="btn btn-yellow" id="submit_contact" type="button">Send Message</button>
                           </div>
                        </div>
                        <div class="success-msg-box" style="display: none;" id="message_contact_toggle">
                            <div class="success-msg-box-inner">
                                <h4>Thank You!</h4>
                                <p>Your Form has been submitted successfully.<br/>To re-submit the details again, click on the below button.</p>
                                <a href="contact.php" class="btn btn-yellow">Resubmit Details</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

<!-- thank you or  error message area will show only after submit -->
<div class="message-overlay">

</div>

    </div>
    <!-- contact area End -->
    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
    <div class="elfsight-app-b62d0f7a-44ec-4f30-badf-c2f385b18e85"></div>
</main>

   
   
    <!-- newslatter area End -->
    <?php include 'includes/footer.php' ?>
