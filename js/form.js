 document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("inquiryForm");
        const fullNameInput = document.getElementById("fullName");
        const mobileInput = document.getElementById("mobile");
        const emailInput = document.getElementById("email");
        const purposeSelect = document.getElementById("purpose");
        const responseMessage = document.getElementById("responseMessage");

        // Real-time validation for full name
        fullNameInput.addEventListener("input", function () {
          validateField(this, validateName);
        });

        // Real-time validation for mobile
        mobileInput.addEventListener("input", function () {
          validateField(this, validateMobile);
        });

        // Real-time validation for email
        emailInput.addEventListener("input", function () {
          validateField(this, validateEmail);
        });

        // Real-time validation for purpose
        purposeSelect.addEventListener("change", function () {
          validateField(this, validatePurpose);
        });

        // Form submission
        form.addEventListener("submit", function (e) {
          e.preventDefault();

          // Validate all fields
          const isNameValid = validateField(fullNameInput, validateName);
          const isMobileValid = validateField(mobileInput, validateMobile);
          const isEmailValid = validateField(emailInput, validateEmail);
          const isPurposeValid = validateField(purposeSelect, validatePurpose);

          if (isNameValid && isMobileValid && isEmailValid && isPurposeValid) {
            // Show success message
            showResponseMessage(
              "Thank you for your inquiry! We will respond within 24 business hours.",
              "success"
            );

            // In a real application, you would send the form data to a server here
            console.log("Form submitted with data:", {
              fullName: fullNameInput.value,
              mobile: mobileInput.value,
              email: emailInput.value,
              city: document.getElementById("city").value,
              purpose: purposeSelect.value,
              message: document.getElementById("message").value,
            });

            // Reset form after 3 seconds
            setTimeout(() => {
              form.reset();
              responseMessage.style.display = "none";
            }, 5000);
          } else {
            showResponseMessage(
              "Please correct the errors in the form before submitting.",
              "error"
            );
          }
        });

        // Validation functions
        function validateName(field) {
          return field.value.trim().length >= 2;
        }

        function validateMobile(field) {
          const mobileRegex = /^\d{10}$/;
          return mobileRegex.test(field.value.trim());
        }

        function validateEmail(field) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(field.value.trim());
        }

        function validatePurpose(field) {
          return field.value !== "";
        }

        // Field validation and UI update
        function validateField(field, validationFn) {
          const errorElement = document.getElementById(`${field.id}Error`);
          const isValid = validationFn(field);

          if (isValid) {
            field.classList.remove("error");
            field.classList.add("valid");
            errorElement.style.display = "none";
          } else {
            field.classList.remove("valid");
            field.classList.add("error");
            errorElement.style.display = "block";
          }

          return isValid;
        }

        // Show response message
        function showResponseMessage(message, type) {
          responseMessage.textContent = message;
          responseMessage.className = `response-message ${type}`;
          responseMessage.style.display = "block";

          // Scroll to the response message
          responseMessage.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }

        // Initialize tooltips for optional fields
        const optionalLabels = document.querySelectorAll(".optional");
        optionalLabels.forEach((label) => {
          label.title = "This field is optional";
        });
      });