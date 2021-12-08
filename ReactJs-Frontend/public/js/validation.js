$(function () {
  $('#quickForm').validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true
      },
      cpassword: {
        required: true,
        equalTo: "#password"
      },
      depan:{
        required: true
      },
      belakang:{
        required: true
      },
      telepon:{
        required: true,
        digits: true,
        minlength: 11,
        maxlength: 13
      },
      nik:{
        digits: true,
      },
      rekening:{
        digits: true,
      }
    },
    messages: {
      email: {
        required: "Harap isi email",
        email: "Email tidak valid"
      },
      password: {
        required: "Harap isi password",
      },
      cpassword: {
        required: "Harap isi password",
        equalTo: "Konfirmasi password tidak sama"
      },
      depan: {
        required: "Harap isi nama depan",
      },
      belakang: {
        required: "Harap isi nama belakang",
      },
      telepon: {
        required: "Harap isi telepon",
        digits: "Harap isi dengan angka",
        minlength: "Panjang telepon minimal 11 karakter",
        maxlength: "Panjang telepon minimal 13 karakter"
      },
      nik: {
        digits: "Harap isi dengan angka",
      },
      rekening: {
        digits: "Harap isi dengan angka",
      }
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
    }
  });
    
  $('#quickForm').on('submit', function()
  {  
    if($("#quickForm").valid()){
      $('#btnSubmit').attr('disabled',true);
      $('#btnSubmit').html(
      `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`
      );
    }
  })
  
})