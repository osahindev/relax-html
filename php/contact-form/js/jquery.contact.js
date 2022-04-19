/*global jQuery, document*/
/* ==========================================================================
Document Ready Function
========================================================================== */
jQuery(document).ready(function () {

    'use strict';

    var emailReg, successmessage, failedmessage, username, useremail, usersubject, usermessage, isvalid, url;

    jQuery('.contact-form').submit(
		function nestocontact() {

            emailReg = new RegExp(/^(("[\w-\s]+")|([\w\-]+(?:\.[\w\-]+)*)|("[\w-\s]+")([\w\-]+(?:\.[\w\-]+)*))(@((?:[\w\-]+\.)*\w[\w\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            successmessage = "Thank you " + jQuery('#contact-name').val() + ", we will contact you shortly.";
            failedmessage = "There was a problem, please try again";
            username = jQuery('#contact-name');
            useremail = jQuery('#contact-email');
            usersubject = jQuery('#contact-subject');
            usermessage = jQuery('#contactFormTextArea');
            isvalid = 1;
            url = "php/contact-form/php/contact.php";

            if (username.val() === "") {
				swal({
				  title: "Error !",
				  text: "Your name is required.",
				  icon: "error",
				});
				return false;
			}

            if (useremail.val() === "") {
				swal({
				  title: "Error !",
				  text: "Your email is required.",
				  icon: "error",
				});
                return false;
			}
            var valid = emailReg.test(useremail.val());
            if (!valid) {
				swal({
				  title: "Error !",
				  text: "Please enter a valid email address.",
				  icon: "error",
				});
                jQuery('input[type=submit]', jQuery(".contact-form")).removeAttr('disabled');
                return false;
			}

            if (usersubject.val() === "") {
				swal({
				  title: "Error !",
				  text: "Your subject is required.",
				  icon: "error",
				});
				return false;
			}

            if (usermessage.val() === "") {
				swal({
				  title: "Error !",
				  text: "Your message is required.",
				  icon: "error",
				});
				return false;
			}


            jQuery.post(url, { username: username.val(), useremail: useremail.val(), usersubject: usersubject.val(), usermessage: usermessage.val(), isvalid: isvalid }, function (data) {

                if (data === 'success') {
					swal({
					  title: "Success !",
					  text: "Thanks! Your email was successfully sent.",
					  icon: "success",
					});
                    jQuery('#contact-name').val('');
                    jQuery('#contact-email').val('');
                    jQuery('#contact-subject').val('');
                    jQuery('#contactFormTextArea').val('');
				} else {
					swal({
					  title: "Error !",
					  text: "There was a problem, please try again later.",
					  icon: "error",
					});
                    return false;
				}

			});


		}

	);

});