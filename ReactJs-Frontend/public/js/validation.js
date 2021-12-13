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
      },

      //rumah kos
      nama_kos:{
        required: true
      },
      alamat_kos:{
        required: true
      },
      kode_pos:{
        required: true,
        digits: true,
        maxlength: 5
      },
      kota_kos:{
        required: true
      },
      rumah_kos:{
        required: true
      },
      panjang:{
        required: true
      },
      lebar:{
        digits: true,
      },
      hrgaBulanan:{
        required: true,
      },
      hrgaTahunan:{
        required: true,
      },
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
        maxlength: "Panjang telepon maksimal 13 karakter"
      },
      nik: {
        digits: "Harap isi dengan angka",
      },
      rekening: {
        digits: "Harap isi dengan angka",
      },

      //rumah kos
      nama_kos:{
        required: "Harap isi nama",
      },
      alamat_kos:{
        required: "Harap isi alamat",
      },
      kode_pos:{
        required: "Harap isi kode pos",
        digits: "Harap isi dengan angka",
        maxlength: "Panjang kode pos maksimal 5 karakter"
      },
      kota_kos:{
        required: "Harap pilih kota",
      },
      rumah_kos:{
        required: "Harap pilih rumah kos",
      },
      panjang:{
        required: "Harap isi panjang",
      },
      lebar:{
        required: "Harap isi lebar",
      },
      hrgaBulanan:{
        required: "Harap isi harga bulanan",
      },
      hrgaTahunan:{
        required: "Harap isi harga tahunan",
      },
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