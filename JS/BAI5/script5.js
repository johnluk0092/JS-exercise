function a_plus_b(form) {
    form.ans.value = parseFloat(form.a.value) + parseFloat(form.b.value);
}

function a_minus_b(form) {
    form.ans.value = parseFloat(form.a.value) - parseFloat(form.b.value);
}

function a_times_b(form) {
    form.ans.value = parseFloat(form.a.value) * parseFloat(form.b.value);
}

function a_div_b(form) {
    form.ans.value = parseFloat(form.a.value) / parseFloat(form.b.value);
}

function a_pow_b(form) {
    form.ans.value = Math.pow(parseFloat(form.a.value), parseFloat(form.b.value));
}