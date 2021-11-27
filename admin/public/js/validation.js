$(function () {
    $('#quickForm').validate({
        rules: {
          nama: {
            required: true,
          },
          keterangan: {
            required: true,
          },
        },
        messages: {
          nama: {
            required: "Harap isi nama",
          },
          keterangan: {
            required: "Harap isi keterangan",
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
})