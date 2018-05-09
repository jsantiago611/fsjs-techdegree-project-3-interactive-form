// P A G E   L O A D ---------------------------------------------------->

//Upon page load, Focuses on first text field------------------------>//
$("#name").focus();

//Constants to use
const form = document.querySelector('form');
var newDiv = document.createElement("div");
var input = document.createElement("input");
var currentDiv = document.getElementById("div1")
input.type = "text";
input.id = "other-title"
input.placeholder = "Your Job Role"
const $main = $('input[name="all"]');
const $jsFrameWorks = $('input[name="js-frameworks"]');
const $jslibs = $('input[name="js-libs"]');
const $express = $('input[name="express"]');
const $node = $('input[name="node"]');
const $tools = $('input[name="build-tools"]');
const $npm = $('input[name="npm"]');
const name = document.querySelector('form #name');
const email = document.querySelector('form #mail');
const jobRole = document.querySelector('form #title');
const activityLegend = document.querySelector('form .actitity-legend')
const paymentLegend = document.querySelector('form .payment-legend')
const dropDown1 = jobRole.querySelectorAll('option')[0];
const dropDown2 = jobRole.querySelectorAll('option')[1];
const dropDown3 = jobRole.querySelectorAll('option')[2];
const dropDown4 = jobRole.querySelectorAll('option')[3];
const dropDown5 = jobRole.querySelectorAll('option')[4];
const dropDown6 = jobRole.querySelectorAll('option')[5];
const userInput = document.querySelector("#other-title");
const submit = document.querySelector('button');


// J O B   R O L E ---------------------------------------------------->

$("#non-js-title").hide();

function getSelectValue() {
  var selectedValue =  document.getElementById("title").value;
    //if "other" option is selected...
    if (selectedValue === "other") {
      console.log("other has been selected");
      //create empty text field
      newDiv.appendChild(input);
      //append to the DOM by creating new div and appending before new div
      const appendedDiv = currentDiv.appendChild(newDiv);
      //show the new text field
      input.style.display = 'block';
      //bring focus to new text field
      document.getElementById('other-title').focus();

    //validate it...
      //if this option chosen and there is no input....
      appendedDiv.addEventListener("input", () => {
        console.log("i am listening!");
        if (input.value === "") {
        console.log("event listener is working");
        $("#other-title").focus();
        jobRole.previousElementSibling.textContent = "Oops! You forgot to type in your job role.";
        jobRole.previousElementSibling.classList.add('errorText');
        return false;
        //if this option chosen and there is input...
      } else {
        jobRole.previousElementSibling.classList.remove('errorText');
        document.getElementById('other-title').focus();
      }})

    //if job role OTHER THAN "other" selected...
    } else if (dropDown1.selected || dropDown2.selected || dropDown3.selected || dropDown4.selected || dropDown5.selected) {
      jobRole.previousElementSibling.textContent = "Your Job Role:";
      jobRole.previousElementSibling.classList.remove('errorText');
      input.style.display = 'none';
    };
  }

  getSelectValue();

  // T - S H I R T   I N F O -------------------------------------------->

    const design = document.getElementById('design');
    const color = document.getElementById('colors-js-puns');
    const colorDiv = document.querySelector('#color');
    const colorOptions = document.querySelector('#color option');
    const $tomato = $('#color option[value="tomato"]');
    const $steelBlue = $('#color option[value="steelblue"]');
    const $dimGrey = $('#color option[value="dimgrey"]');
    const $cornFlowerBlue = $('#color option[value="cornflowerblue"]');
    const $darkGrey = $('#color option[value="darkslategrey"]');
    const $gold = $('#color option[value="gold"]');
    const $selectColors = $(".selectColors");
    const jsPunColors = document.getElementsByClassName(".jsPunColors");
    const heartJsColors = document.getElementsByClassName(".heartJsColors");

    //hide color div on pageload
    $(".colors-js-puns").hide();
    color.style.display = "none";

    const clearColorOptions = () => {
      $('#color option[value="cornflowerblue"]').remove();
      $('#color option[value="darkslategrey"]').remove();
      $('#color option[value="gold"]').remove();
      $('#color option[value="tomato"]').remove();
      $('#color option[value="steelblue"]').remove();
      $('#color option[value="dimgrey"]').remove();
      $('#color option[value="selecttheme"]').remove();
    }

//When user clicks for design option...
$($("#design")).on("change", function () {

    //If user selects "Puns..."
    if(design.value === "js puns") {
      clearColorOptions();
      color.style.display = "block";
      console.log("working");
      $('#color').append("<option class='jsPunColors' value='cornflowerblue'>Cornflower Blue (JS Puns shirt only)</option>");
      $('#color').append("<option class='jsPunColors' value='darkslategrey'>Dark Slate Grey (JS Puns shirt only)</option>");
      $('#color').append("<option class='jsPunColors' value='gold'>Gold (JS Puns shirt only)</option>");
      }

    //If user selects "Heart" design
    else if (design.value === "heart js") {
      clearColorOptions();
      color.style.display = "";
      console.log("heart is working");
      $('#color').append('<option class="heartJsColors" value="tomato">Tomato (I &#9829; JS shirt only)</option>');
      $('#color').append('<option class="heartJsColors" value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>');
      $('#color').append('<option class="heartJsColors" value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');

    //if user selects nothing...
     } else {
       color.style.display = 'none';
     }});


//R E G I S T E R   F O R   A C T I V I T I E S=====================

  //1. Create new "total" div and hide it upon page load.
    $('.activities').append('<div class="totalDiv"><label name="total-amount" class="total-display">Total: </label></div>');
    $('.totalDiv').addClass('is-hidden');


  //2. Calculate and display totals
        let $total = 0;
        const activityType = document.querySelector('.activities');

        //Let's the Show Div when any checkbox is active:
          //when any checkbox is checked..
          $('input:checkbox').on('change', function() {
            if ($(this).is(':checked')) {
              //show the "total: " div
              $('.totalDiv').removeClass('is-hidden');
              //calculate total amount based on value of checkbox
              $total += +this.value;
              console.log($total); //quick check
              //add the checkbox value to the div
              $('.total-display').html('Total: $' + parseInt($total));
            } else if ($('#Workshops input:checkbox:checked').length = 1) {
              console.log("off")
              //if a checkbox is unselected, subtract value
              $total -= +this.value;
              //and display the updated total
              $('.total-display').html('Total: $' + parseInt($total));
            }
            });

            //LIVE REGISTRATION VALIDATION
            function regValidation() {
              var n = $("input:checked").length;
              if (n === 0) {
                $(".totalDiv").addClass('is-hidden');
                console.log("nothing is selected");
                activityLegend.innerText = "Please choose an activity.";
                activityLegend.classList.add('errorText');
              } else {
                activityLegend.textContent = "Register for Activities";
                activityLegend.classList.remove('errorText');
              }};

              $("input:checkbox").on ("click", regValidation );

    //4. Account for event overlaps.

      //If the "Frameworks" checkbox is checked...
      $jsFrameWorks.change(function() {
        if ($(this).is(':checked')) {
          console.log("i am checked");
          //disable
          $express.prop( "disabled", true );
        } else{
          $express.prop( "disabled", false );
        }});

      //If the "Libraries" checkbox is checked...
      $jslibs.change(function() {
        if ($(this).is(':checked')) {
          //disable
          $node.prop( "disabled", true );
        } else{
          $node.prop( "disabled", false );
        }});

      //If the "Express" checkbox is checked...
      $express.change(function() {
        if ($(this).is(':checked')) {
          //disable
          $jsFrameWorks.prop( "disabled", true );
        } else{
          $jsFrameWorks.prop( "disabled", false );
        }});

      //If the "Node.js" checkbox is checked...
      $node.change(function() {
        if ($(this).is(':checked')) {
          //disable
          $jslibs.prop( "disabled", true );
        } else{
          $jslibs.prop( "disabled", false );
        }});



//P A Y M E N T   O P T I O N S =====================

  //Variables needed in sections
  const paymentDiv = document.querySelector("#payment");
  const creditCard = document.querySelector("#credit-card");
  const payPal = document.querySelectorAll("fieldset div p")[0];
  const bitcoin = document.querySelectorAll("fieldset div p")[1];
  const ccNumber = document.getElementById("cc-num");
  const zip = document.getElementById("zip");
  const cvv = document.getElementById("cvv");
  const exDate = document.getElementById("exp-month");
  const exYear = document.getElementById("exp-year");

    //Hide all options until selection is made
    $(creditCard).hide();
    $(bitcoin).hide();
    $(payPal).hide();

    //Display payment sections based on payment option selectedValue
  paymentDiv.addEventListener('change', (e) => {
    if (e.target.value === 'credit card') {
      payPal.style.display = 'none';
      creditCard.style.display = 'block';
      bitcoin.style.display = 'none';
      console.log("cc selected");
      finalCCVal();
      finalCVVVal();
      finalZipVal();
      paymentLegend.innerText = "Payment Info";
      paymentLegend.classList.remove('errorText');
    }

    if (e.target.value === 'paypal') {
      payPal.style.display = 'block';
      creditCard.style.display = 'none';
      bitcoin.style.display = 'none';
      console.log("pp selected");
      paymentLegend.innerText = "Payment Info";
      paymentLegend.classList.remove('errorText');
    }

    if (e.target.value === 'bitcoin') {
      payPal.style.display = 'none';
      creditCard.style.display = 'none';
      bitcoin.style.display = 'block';
      console.log("bc selected");
      paymentLegend.innerText = "Payment Info";
      paymentLegend.classList.remove('errorText');
    }
  });

  //validation function for Credit Card info.
  function finalCCVal() {
    if ((ccNumber.value.length >= 13) && (ccNumber.value.length <= 16)) {
      console.log("cc is correct length");
      ccNumber.previousElementSibling.textContent = "Card Number:";
      ccNumber.previousElementSibling.classList.remove('errorText');
      ccNumber.classList.remove('errorBox');
      return true;
  }
    //if CC is of incorrect length
    else if (ccNumber.value.length === 0){
    console.log("no cc");
    ccNumber.previousElementSibling.classList.add('errorText');
    ccNumber.previousElementSibling.innerText = "Please enter a credit card number.";
    ccNumber.classList.add('errorBox');

  } else {
    console.log("cc is NOT correct length");
    ccNumber.previousElementSibling.classList.add('errorText');
    ccNumber.previousElementSibling.textContent = "Please enter a number that is between 13 and 16 digits long.";
    ccNumber.classList.add('errorBox');
  }}

//Live cc validation (calls the above function)
function paymentVal() {
  ccNumber.addEventListener('input', (e) => {
    //if credit card # is of appropriate length..
    finalCCVal();
  })};

//validation function for Zip Code Value
  function finalZipVal() {
  //if credit card 5 digits long..
  if (zip.value.length === 5) {
      zip.previousElementSibling.textContent = "Zip Code:";
      zip.previousElementSibling.classList.remove('errorText');
      zip.classList.remove('errorBox');
      return true;
  }
    //if zip is of incorrect length
    else {
    zip.previousElementSibling.classList.add('errorText');
    zip.previousElementSibling.innerText = "Please enter a valid zip code.";
    zip.classList.add('errorBox');
  }}

  //Live zip code validation (calls on the function above)
  zip.addEventListener('input', (e) => {
    finalZipVal();
  });

  //Validation Function for CVV #
  function finalCVVVal() {
  //if credit card 5 digits long..
  if (cvv.value.length === 3) {
      cvv.previousElementSibling.textContent = "CCV:";
      cvv.previousElementSibling.classList.remove('errorText');
      cvv.classList.remove('errorBox');
      return true;
  }
    //if zip is of incorrect length
    else {
    cvv.previousElementSibling.classList.add('errorText');
    cvv.previousElementSibling.innerText = "Please enter the 3-digit CVV found on the back of the card.";
    cvv.classList.add('errorBox');
  }
};

  //Live ccv validation
  cvv.addEventListener('input', (e) => {
    finalCVVVal();
  })


paymentVal();

  //F O R M   V A L I D A T I O N =====================

    //NAME FIELD
    //Sets the function for name validation
    function errorName() {
        console.log(name);
        if (name.value=== "") {
          name.previousElementSibling.innerText = "Oops! You forgot to enter your name.";
          name.previousElementSibling.classList.add('errorText');
          name.classList.add('errorBox');
          return false;
        } else {
          name.previousElementSibling.textContent = "Name:";
          name.previousElementSibling.classList.remove('errorText');
          name.classList.remove('errorBox');
          return true;
        }
      };

      name.addEventListener("input", function() {
        errorName();
      });
      name.addEventListener("focusout", function() {
        errorName();
      });

      const emailVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //Email field
    function errorEmail() {
        console.log(name);
        const emailVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //If email doesn't have any text...
        if (email.value === "") {
          email.previousElementSibling.classList.add('errorText');
          email.previousElementSibling.innerText = "Oops! You forgot to enter your email.";
          email.classList.add('errorBox');
          //If email is correctly formatted...
        } else if (email.value.match(emailVal)) {
          email.previousElementSibling.textContent = "Email:";
          email.previousElementSibling.classList.remove('errorText');
          email.classList.remove('errorBox');
          return true;
        //If email is incorrectly formatted...
      } else {
        email.previousElementSibling.classList.add('errorText');
        email.previousElementSibling.innerText = "Please enter a valid email address.";
        email.classList.add('errorBox');
        return false;
      }
      }

      //Live VALIDATION
      email.addEventListener("input", function() {
        if (email.value.match(emailVal)) {
          email.previousElementSibling.textContent = "Email:";
          email.previousElementSibling.classList.remove('errorText');
          return true;}
        errorEmail();
      });

      email.addEventListener("focusout", function() {
        errorEmail();
      });

// Final validation on submit button

//Checks for name and email validation
form.addEventListener('submit', (e) => {
  console.log("submit has been clicked");
  if ( !errorName() || !errorEmail() ) {
    console.log('name or email has not run');
    errorName();
    errorEmail();
    e.preventDefault();
  }
  //Prevents form from submitting if Credit Card info is not filled out.
  if ($('#payment option[value="credit card"]').is(':selected')) {
    finalCCVal();
    finalCVVVal();
    finalZipVal();
    console.log("cc worked")
    if ( !finalCCVal() || !finalCVVVal() || !finalZipVal() ){
      e.preventDefault();
    }
    paymentLegend.innerText = "Payment Info";
    paymentLegend.classList.remove('errorText');
  } else if ($('#payment option[value="paypal"]').is(':selected')) {
   console.log("paypal selected");
   paymentLegend.innerText = "Payment Info";
   paymentLegend.classList.remove('errorText');
  } else if ($('#payment option[value="bitcoin"]').is(':selected')) {
   console.log("bitcoin selected");
   paymentLegend.innerText = "Payment Info";
   paymentLegend.classList.remove('errorText');
 } else {
   paymentLegend.innerText = "Please Choose a Payment Method";
   paymentLegend.classList.add('errorText');
 }

  //Checks for event registration
  if ($('input:checked').length === 0) {
    e.preventDefault();
    console.log("event reg is not selected")
    activityLegend.innerText = "Please choose an activity.";
    activityLegend.classList.add('errorText');
  }
})
