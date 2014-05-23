<script>
  
  function setFormValues(response) {
    
    //UPDATE FIELDS BELOW
    //Adjust field IDs on the left with the field IDs on your form
    $('#email').val(response.email);
    $('#name').val(response.name);
      
    //Uncomment the lines below if you require the additional data
      
    //$('#firstNameField').val(response.first_name);
    //$('#lastNameField').val(response.last_name);
    //$('#linkField').val(response.link);
    //$('#genderField').val(response.gender);
    
    lp.jQuery('.lp-pom-form .lp-pom-button').click();
  }
  
  
  // Check Login Status of Visitor
  function statusChangeCallback(response) {
    
    if (response.status === 'connected') {
      fillForm();
    } else if (response.status === 'not_authorized') {
      triggerLogin();
    } else {
      triggerLogin();
    }
  }
  

  // Show Login Window
  function triggerLogin() {
    
   FB.login(function(response) {
     if (response.status === 'connected') {
         fillForm(); 
        }
   }, {scope: 'public_profile,email'}); 
  }
  
  
  // Called when your Facebook button is clicked
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '552705011513631',
    cookie     : true, 
    xfbml      : true, 
    version    : 'v2.0'
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
  
  // Fill and submit the form
  function fillForm() {
    FB.api('/me', function(response) {

      setFormValues(response);
    });
  }
</script>