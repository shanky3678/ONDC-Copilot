const faqs = document.querySelectorAll('[data-list="faq"]');
// console.log(faqs.length);

if (faqs.length != 0) {
  faqs.forEach(function (faq, index) {
    const items = faq.querySelectorAll(":scope > li");
    // console.log(items.length);
    const faqIndex = index;

    // Get all items
    items.forEach(function (item, index) {
      // Set all variables
      const itemIndex = index;
      const input = item.querySelector(":scope > input");
      const type = input.getAttribute("type");
      const label = item.querySelector(":scope > label");
      const answer = item.querySelector(":scope > label + div");

      // Set aria control field
      label.setAttribute(
        "aria-controls",
        "faq-item-" + faqIndex + "-" + itemIndex
      );
      // Set answer ID
      answer.setAttribute("id", "faq-item-" + faqIndex + "-" + itemIndex);
      // Set label as active tabindex
      // label.setAttribute('tabindex','0');

      // Set aria expanded depending on live
      if (input.checked) {
        // console.log('checked');
        label.setAttribute("aria-expanded", "true");
      } else {
        // console.log('not checked');
      }
    });

    // Check if a FAQ is changed
    faq.addEventListener("change", function (e) {
      const input = e.target;
      const item = e.target.parentNode;
      const label = e.target.nextElementSibling;
      const type = e.target.getAttribute("type");

      // Check if type is checkbox
      if (type == "checkbox") {
        // console.log(label);
        if (input.checked) {
          // console.log('checked');
          label.setAttribute("aria-expanded", "true");
        } else {
          // console.log('not checked');
          label.setAttribute("aria-expanded", "false");
        }
      }

      if (type == "radio") {
        console.log(type);
      }
    });
  });
}