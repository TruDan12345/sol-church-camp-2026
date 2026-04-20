const COSTS = { adult: 100, child: 50, toddler: 0 };
const TRANSLATIONS = {
  en: {
    countdownHeading: "New Year starts in",
    heroBadge: "New Year's Celebration 2025-2026 Form",
    step1Pill: "Step 1",
    step1Label: "Primary Contact",
    primaryFirstNameLabel: "Primary First Name",
    firstNamePlaceholder: "First name",
    lastNamePlaceholder: "Last name",
    phonePlaceholder: "Phone number",
    lastNameLabel: "Last Name",
    mobilePhoneLabel: "Mobile Phone",
    spouseFirstNameLabel: "Spouse First Name",
    spouseFirstNameNote: "Do not fill if not applicable",
    step2Pill: "Step 2",
    step2Label: "Attendance Details",
    step2Subtext:
      "14+ are adults, 6-13 are children, 0-5 are free.",
    adultsFieldLabel: "Adults (14+)",
    childrenFieldLabel: "Children (6-13)",
    toddlersFieldLabel: "Children (0-5)",
    priceNote: "14+ $100 / 6-13 $50 / 0-5 Free",
    primaryFirstNameRequired: "Primary first name is required.",
    lastNameRequired: "Last name is required.",
    phoneRequired: "Mobile phone is required.",
    step3Pill: "Step 3",
    step3Label: "First Names",
    step3Subtext: "Please enter the first name of each attendee.",
    adultTableHeading: "Adult First Names (14+)",
    childTableHeading: "Child First Names (6-13)",
    toddlerTableHeading: "Toddler First Names (0-5)",
    childTableNote: "We'll have something special for each child. List them here.",
    submitButton: "Submit Registration",
    paymentHeading: "Submitted! You will be approved after payment.",
    paymentDescription:
      "Thank you for registering. To finalize your family reservation, please send your payment right away using one of the options below. Include the memo so we can match it quickly.",
    paymentZelleLabel: "Zelle",
    paymentCashAppLabel: "Cash App",
    paymentMemoLabel: "Memo",
    daysLabel: "days",
    successMessage: "Form successfully submitted.",
    successTotalLabel: "Your total is",
    cardPaymentEyebrow: "Secure card payment",
    cardPaymentTitle: "Pay by card with Stripe",
    cardPaymentCopy: "Use the tabs to pay with card or wallet. Powered by Stripe.",
    cardPaymentDueLabel: "Amount due",
    feeLabel: "fees",
    payButtonLabel: "Pay now",
    payButtonProcessing: "Processing...",
    paymentReadyNote: "Card form is ready. Your details are encrypted by Stripe.",
    paymentUnavailable: "Card payments are unavailable right now. Please use another option.",
    paymentSuccess: "Payment received! You're all set.",
    paymentMissingKey: "Stripe is not configured. Please contact the organizer.",
    cashPaymentNote: "<strong>Cash Option:</strong> You can bring cash directly to Daniel Trushkov.",
    adultLabel: "Adult",
    childLabel: "Child",
    toddlerLabel: "Toddler",
    submittingMessage: "Submitting...",
    genericError: "Unknown error",
    tryAgainMessage: "Please try again.",
    paymentLoadError: "Failed to load payment form. Please refresh and try again.",
    paymentFailed: "Payment could not be completed.",
    serverResponseError: "Unable to read server response.",
    finalSuccessTitle: "You're all set!",
    finalSuccessBody: "We hope to see you in a bit!",
  },
  es: {
    countdownHeading: "El Año Nuevo comienza en",
    heroBadge: "Formulario Celebración de Año Nuevo 2025-2026",
    step1Pill: "Paso 1",
    step1Label: "Contacto principal",
    primaryFirstNameLabel: "Nombre del responsable",
    firstNamePlaceholder: "Nombre",
    lastNamePlaceholder: "Apellido",
    phonePlaceholder: "Número de teléfono",
    lastNameLabel: "Apellido",
    mobilePhoneLabel: "Teléfono móvil",
    spouseFirstNameLabel: "Nombre del cónyuge",
    spouseFirstNameNote: "No llenar si no aplica",
    step2Pill: "Paso 2",
    step2Label: "Detalles de asistencia",
    step2Subtext:
      "Adultos son 14+, niños 6-13, 0-5 gratis.",
    adultsFieldLabel: "Adultos (14+)",
    childrenFieldLabel: "Niños (6-13)",
    toddlersFieldLabel: "Niños (0-5)",
    priceNote: "14+ $100 / 6-13 $50 / 0-5 Gratis",
    primaryFirstNameRequired: "El nombre del responsable es obligatorio.",
    lastNameRequired: "El apellido es obligatorio.",
    phoneRequired: "El teléfono móvil es obligatorio.",
    step3Pill: "Paso 3",
    step3Label: "Nombres",
    step3Subtext: "Ingresa el primer nombre de cada asistente.",
    adultTableHeading: "Nombres de adultos",
    childTableHeading: "Nombres de niños (6-13)",
    toddlerTableHeading: "Nombres de niños (0-5)",
    childTableNote: "Tenemos algo especial para cada niño. Escríbelos aquí.",
    submitButton: "Enviar registro",
    paymentHeading: "¡Enviado! Serás aprobado después del pago.",
    paymentDescription:
      "Gracias por registrarte. Para finalizar tu reserva familiar, envía tu pago ahora utilizando una de las siguientes opciones. Incluye la nota para identificarlo.",
    paymentZelleLabel: "Zelle",
    paymentCashAppLabel: "Cash App",
    paymentMemoLabel: "Nota",
    daysLabel: "días",
    successMessage: "Formulario enviado con éxito.",
    successTotalLabel: "Tu total es",
    cardPaymentEyebrow: "Pago con tarjeta seguro",
    cardPaymentTitle: "Paga con tarjeta con Stripe",
    cardPaymentCopy: "Usa las pestañas para pagar con tarjeta o wallet. Impulsado por Stripe.",
    cardPaymentDueLabel: "Monto a pagar",
    feeLabel: "comisiones",
    payButtonLabel: "Pagar ahora",
    payButtonProcessing: "Procesando...",
    paymentReadyNote: "El formulario está listo. Tus datos están cifrados por Stripe.",
    paymentUnavailable: "Los pagos con tarjeta no están disponibles. Usa otra opción.",
    paymentSuccess: "¡Pago recibido! Todo listo.",
    paymentMissingKey: "Stripe no está configurado. Contacta al organizador.",
    cashPaymentNote: "<strong>Opción en efectivo:</strong> Puedes entregar el efectivo directamente a Daniel Trushkov.",
    adultLabel: "Adulto",
    childLabel: "Niño",
    toddlerLabel: "Pequeño",
    submittingMessage: "Enviando...",
    genericError: "Error desconocido",
    tryAgainMessage: "Inténtalo de nuevo.",
    paymentLoadError: "No se pudo cargar el formulario de pago. Actualiza e inténtalo de nuevo.",
    paymentFailed: "No se pudo completar el pago.",
    serverResponseError: "No se pudo leer la respuesta del servidor.",
    finalSuccessTitle: "Todo listo",
    finalSuccessBody: "Esperamos verte pronto.",
  },
  ru: {
    countdownHeading: "До Нового года осталось",
    heroBadge: "Форма регистрации Новогодний праздник 2025-2026",
    step1Pill: "Шаг 1",
    step1Label: "Контактные данные",
    primaryFirstNameLabel: "Имя ответственного",
    firstNamePlaceholder: "Имя",
    lastNamePlaceholder: "Фамилия",
    phonePlaceholder: "Номер телефона",
    lastNameLabel: "Фамилия",
    mobilePhoneLabel: "Мобильный телефон",
    spouseFirstNameLabel: "Имя супруга(и)",
    spouseFirstNameNote: "Не заполняйте, если не применимо",
    step2Pill: "Шаг 2",
    step2Label: "Детали посещения",
    step2Subtext:
      "Взрослые — от 14 лет, дети — 6-13, 0-5 бесплатно.",
    adultsFieldLabel: "Взрослые (14+)",
    childrenFieldLabel: "Дети (6-13)",
    toddlersFieldLabel: "Дети (0-5)",
    priceNote: "14+ $100 / 6-13 $50 / 0-5 Бесплатно",
    primaryFirstNameRequired: "Имя ответственного обязательно.",
    lastNameRequired: "Фамилия обязательна.",
    phoneRequired: "Необходим мобильный телефон.",
    step3Pill: "Шаг 3",
    step3Label: "Имена",
    step3Subtext: "Введите имена всех участников.",
    adultTableHeading: "Имена взрослых",
    childTableHeading: "Имена детей (6-13)",
    toddlerTableHeading: "Имена детей (0-5)",
    childTableNote: "Для каждого ребенка приготовлен сюрприз — перечислите их.",
    submitButton: "Отправить регистрацию",
    paymentHeading: "Заявка отправлена! Подтверждение после оплаты.",
    paymentDescription:
      "Спасибо за регистрацию. Чтобы закрепить место, оплатите одним из способов ниже и укажите пометку.",
    paymentZelleLabel: "Zelle",
    paymentCashAppLabel: "Cash App",
    paymentMemoLabel: "Пометка",
    daysLabel: "дней",
    successMessage: "Форма успешно отправлена.",
    successTotalLabel: "Ваш итог",
    cardPaymentEyebrow: "Безопасная оплата картой",
    cardPaymentTitle: "Оплатите картой через Stripe",
    cardPaymentCopy:
      "Используйте вкладки, чтобы оплатить картой или кошельком. Обработку выполняет Stripe.",
    cardPaymentDueLabel: "Сумма к оплате",
    feeLabel: "комиссия",
    payButtonLabel: "Оплатить",
    payButtonProcessing: "Обработка...",
    paymentReadyNote: "Форма оплаты готова. Ваши данные шифруются Stripe.",
    paymentUnavailable: "Оплата картой сейчас недоступна. Выберите другой способ.",
    paymentSuccess: "Платеж получен! Все готово.",
    paymentMissingKey: "Stripe не настроен. Свяжитесь с организатором.",
    cashPaymentNote: "<strong>Наличные:</strong> Вы можете передать наличные лично Даниилу Трушкову.",
    adultLabel: "Взрослый",
    childLabel: "Ребенок",
    toddlerLabel: "Малыш",
    submittingMessage: "Отправка...",
    genericError: "Неизвестная ошибка",
    tryAgainMessage: "Пожалуйста, попробуйте еще раз.",
    paymentLoadError: "Не удалось загрузить форму оплаты. Обновите страницу и попробуйте снова.",
    paymentFailed: "Не удалось завершить оплату.",
    serverResponseError: "Не удалось прочитать ответ сервера.",
    finalSuccessTitle: "Все готово!",
    finalSuccessBody: "Надеемся скоро вас увидеть.",
  },
  uk: {
    countdownHeading: "До Нового року залишилося",
    heroBadge: "Форма реєстрації Новорічне свято 2025-2026",
    step1Pill: "Крок 1",
    step1Label: "Контактна особа",
    primaryFirstNameLabel: "Ім'я відповідального",
    firstNamePlaceholder: "Ім'я",
    lastNamePlaceholder: "Прізвище",
    phonePlaceholder: "Номер телефону",
    lastNameLabel: "Прізвище",
    mobilePhoneLabel: "Мобільний телефон",
    spouseFirstNameLabel: "Ім'я чоловіка/дружини",
    spouseFirstNameNote: "Не заповнюйте, якщо не застосовується",
    step2Pill: "Крок 2",
    step2Label: "Деталі відвідування",
    step2Subtext:
      "Дорослі — від 14 років, діти — 6-13, 0-5 безкоштовно.",
    adultsFieldLabel: "Дорослі (14+)",
    childrenFieldLabel: "Діти (6-13)",
    toddlersFieldLabel: "Діти (0-5)",
    priceNote: "Дорослі $100 / 6-13 $50 / 0-5 Безкоштовно",
    primaryFirstNameRequired: "Ім'я відповідального обов'язкове.",
    lastNameRequired: "Прізвище обов'язкове.",
    phoneRequired: "Потрібен мобільний телефон.",
    step3Pill: "Крок 3",
    step3Label: "Імена",
    step3Subtext: "Укажіть імена всіх учасників.",
    adultTableHeading: "Імена дорослих",
    childTableHeading: "Імена дітей (6-13)",
    toddlerTableHeading: "Імена дітей (0-5)",
    childTableNote: "Для кожної дитини готуємо щось особливе — впишіть їх тут.",
    submitButton: "Надіслати реєстрацію",
    paymentHeading: "Надіслано! Після оплати вас підтвердять.",
    paymentDescription:
      "Дякуємо за реєстрацію. Щоб зафіксувати місця, оплатіть одним із способів і додайте примітку.",
    paymentZelleLabel: "Zelle",
    paymentCashAppLabel: "Cash App",
    paymentMemoLabel: "Примітка",
    daysLabel: "днів",
    successMessage: "Форму успішно надіслано.",
    successTotalLabel: "Ваш підсумок",
    cardPaymentEyebrow: "Безпечна оплата карткою",
    cardPaymentTitle: "Оплатіть карткою через Stripe",
    cardPaymentCopy:
      "Скористайтесь вкладками для оплати карткою чи гаманцем. Обробка від Stripe.",
    cardPaymentDueLabel: "Сума до оплати",
    feeLabel: "комісія",
    payButtonLabel: "Сплатити",
    payButtonProcessing: "Обробка...",
    paymentReadyNote: "Форма оплати готова. Ваші дані шифрує Stripe.",
    paymentUnavailable: "Оплата карткою зараз недоступна. Скористайтесь іншим способом.",
    paymentSuccess: "Платіж отримано! Все готово.",
    paymentMissingKey: "Stripe не налаштований. Зв'яжіться з організатором.",
    cashPaymentNote: "<strong>Готівка:</strong> Ви можете передати готівку особисто Даниїлу Трушкову.",
    adultLabel: "Дорослий",
    childLabel: "Дитина",
    toddlerLabel: "Малюк",
    submittingMessage: "Надсилання...",
    genericError: "Невідома помилка",
    tryAgainMessage: "Будь ласка, спробуйте ще раз.",
    paymentLoadError: "Не вдалося завантажити форму оплати. Оновіть сторінку й спробуйте знову.",
    paymentFailed: "Не вдалося завершити оплату.",
    serverResponseError: "Не вдалося прочитати відповідь сервера.",
    finalSuccessTitle: "Усе готово!",
    finalSuccessBody: "Сподіваємось скоро вас побачити.",
  },
};

const getPreferredLocale = () => {
  const locale = (navigator.language || "").toLowerCase();
  if (locale.startsWith("uk") || locale.startsWith("ua")) return "uk";
  if (locale.startsWith("ru")) return "ru";
  if (locale.startsWith("es")) return "es";
  return "en";
};

let activeLocale = getPreferredLocale();
let activeStrings = TRANSLATIONS[activeLocale] || TRANSLATIONS.en;

const getString = (key) =>
  (activeStrings && activeStrings[key]) || TRANSLATIONS.en[key] || "";

const applyTranslations = () => {
  document.documentElement.lang = activeLocale;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const text = getString(key);
    if (text) {
      if (key === 'cashPaymentNote') {
        el.innerHTML = text; // User innerHTML for the bold tag
      } else {
        el.textContent = text;
      }
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const text = getString(key);
    if (text) {
      el.setAttribute("placeholder", text);
    }
  });

};

const form = document.getElementById("registrationForm");
const adultInput = document.getElementById("adultCount");
const childInput = document.getElementById("childCount");
const toddlerInput = document.getElementById("toddlerCount");
const adultList = document.getElementById("adultList");
const childList = document.getElementById("childList");
const toddlerList = document.getElementById("toddlerList");
const childTable = document.getElementById("childTable");
const toddlerTable = document.getElementById("toddlerTable");
const statusEl = document.getElementById("status");
const successPanel = document.getElementById("successPanel");
const successTotalEl = document.getElementById("successTotal");
const primaryFirstNameEl = document.getElementById("primaryFirstName");
const primaryLastNameEl = document.getElementById("primaryLastName");
const spouseFirstNameEl = document.getElementById("spouseFirstName");
const phoneInput = document.getElementById("phone");

const paymentForm = document.getElementById("paymentForm");
const payButton = document.getElementById("payNowButton");
const paymentStatusEl = document.getElementById("paymentStatus");
const paymentElementContainer = document.getElementById("payment-element");
const cardTotalEl = document.getElementById("cardTotal");
const cardPaymentPanel = document.getElementById("cardPayment");

let stripeInstance = null;
let stripeElements = null;
let stripePaymentElement = null;
let activeClientSecret = null;
let activePublishableKey = "";
let lastDisplayedTotal = 0;
let lastDisplayedFees = 0;

const requiredFields = [
  { input: primaryFirstNameEl, key: "primaryFirstNameRequired" },
  { input: primaryLastNameEl, key: "lastNameRequired" },
  { input: phoneInput, key: "phoneRequired" },
];

const validateRequiredFields = () => {
  let valid = true;
  requiredFields.forEach(({ input, key }) => {
    if (!input) return;
    if (!input.value.trim()) {
      input.setCustomValidity(getString(key) || "Required");
      valid = false;
    } else {
      input.setCustomValidity("");
    }
  });
  if (!form.reportValidity()) {
    valid = false;
  }
  return valid;
};

requiredFields.forEach(({ input }) => {
  if (!input) return;
  input.addEventListener("input", () => input.setCustomValidity(""));
});

const mainScriptTag = document.querySelector('script[src$="main.js"]');
const scriptURL = mainScriptTag?.getAttribute("data-script-url") ||
  "https://script.google.com/macros/s/AKfycbzjFDt0j0oMPfW8hjbAxbD4c04YoShGanqXChvlKq2MKXw_MDjfcQ4IQgIf2-K5_xTIVg/exec";
const stripePublishableKey =
  (mainScriptTag?.getAttribute("data-stripe-publishable-key") || "").trim();


const formatCurrency = (value) =>
  new Intl.NumberFormat(activeLocale, { style: "currency", currency: "USD" }).format(
    Number(value) || 0
  );

const updateTotalDisplays = (total, fees = 0) => {
  lastDisplayedTotal = Number(total) || 0;
  lastDisplayedFees = Number(fees) || 0;
  const formattedTotal = formatCurrency(total);
  if (successTotalEl) {
    successTotalEl.textContent = formattedTotal;
  }
  if (cardTotalEl) {
    cardTotalEl.textContent = formattedTotal;
  }

  const feeDisplay = document.getElementById("feeDisplay");
  if (feeDisplay) {
    if (fees > 0) {
      feeDisplay.textContent = `+ ${formatCurrency(fees)} ${getString("feeLabel") || "fees"}`;
      feeDisplay.style.display = "block";
    } else {
      feeDisplay.style.display = "none";
    }
  }
};

const showPaymentStatus = (message, type = "") => {
  if (!paymentStatusEl) return;
  paymentStatusEl.textContent = message;
  paymentStatusEl.className = `status-message${type ? ` ${type}` : ""}`;
  paymentStatusEl.style.display = "block";
};

const resetPaymentUI = () => {
  activeClientSecret = null;
  if (stripePaymentElement) {
    stripePaymentElement.unmount();
    stripePaymentElement.destroy();
    stripePaymentElement = null;
  }
  if (payButton) {
    payButton.disabled = true;
    payButton.textContent = getString("payButtonLabel") || "Pay now";
  }
  if (paymentStatusEl) {
    paymentStatusEl.textContent = "";
    paymentStatusEl.className = "status-message";
    paymentStatusEl.style.display = "none";
  }
};

const getPublishableKey = () => {
  const keyCandidate =
    stripePublishableKey ||
    (typeof window !== "undefined" ? window.STRIPE_PUBLISHABLE_KEY : "") ||
    "";
  return typeof keyCandidate === "string" ? keyCandidate.trim() : "";
};

const initializeStripePayment = async (clientSecret, totalCostValue, paymentErrorMessage) => {
  try {
    if (!cardPaymentPanel || !paymentElementContainer || !payButton) return;
    resetPaymentUI();
    cardPaymentPanel.style.display = "block";

    if (paymentErrorMessage) {
      showPaymentStatus(paymentErrorMessage, "error");
      return;
    }

    if (!clientSecret) {
      showPaymentStatus(
        getString("paymentUnavailable") || "Card payments are unavailable right now.",
        "error"
      );
      return;
    }

    if (cardTotalEl) {
      cardTotalEl.textContent = formatCurrency(totalCostValue);
    }

    const publishableKey = getPublishableKey();
    if (!publishableKey) {
      showPaymentStatus(
        getString("paymentMissingKey") || "Stripe is not configured. Please contact us.",
        "error"
      );
      return;
    }

    if (typeof Stripe === "undefined") {
      showPaymentStatus(
        getString("paymentUnavailable") || "Card payments are unavailable right now.",
        "error"
      );
      return;
    }

    if (!stripeInstance || activePublishableKey !== publishableKey) {
      stripeInstance = Stripe(publishableKey);
      activePublishableKey = publishableKey;
    }

    const loader = document.getElementById("payment-loader");
    if (loader) loader.style.display = "block";
    if (paymentElementContainer) paymentElementContainer.style.display = "none";

    stripeElements = stripeInstance.elements({
      clientSecret,
      appearance: { theme: "stripe" },
    });

    const expressCheckoutElement = stripeElements.create("expressCheckout");
    expressCheckoutElement.mount("#express-checkout-element");

    stripePaymentElement = stripeElements.create("payment", {
      layout: "tabs",
      wallets: {
        applePay: "never",
        googlePay: "never",
      }
    });
    stripePaymentElement.mount("#payment-element");

    stripePaymentElement.on("ready", () => {
      if (loader) loader.style.display = "none";
      if (paymentElementContainer) paymentElementContainer.style.display = "block";
    });

    activeClientSecret = clientSecret;
    payButton.disabled = false;

  } catch (err) {
    console.error("Stripe Initialization Error:", err);
    showPaymentStatus(
      getString("paymentLoadError") || "Failed to load payment form. Please refresh and try again.",
      "error"
    );
  }
};

// Global error handler for unhandled promises (like Stripe network errors)
window.addEventListener("unhandledrejection", (event) => {
  // 1. Check for ignored errors FIRST (telemetry/fraud detection blocks)
  if (event.reason) {
    const msg = (event.reason.message || "").toLowerCase();
    const stack = (event.reason.stack || "").toLowerCase();

    // Ignore ad-blocker related errors for Stripe telemetry
    if (
      msg.includes("r.stripe.com") ||
      msg.includes("m.stripe.com") ||
      msg.includes("b.stripe.com") ||
      msg.includes("load failed") ||
      msg.includes("fetch") ||
      msg.includes("blocked")
    ) {
      // Check if it's likely a background Stripe request
      if (msg.includes("stripe") || stack.includes("stripe")) {
        event.preventDefault();
        console.warn("Suppressing ad-blocker error:", msg);
        return;
      }
    }
  }

  // 2. Log other errors for debugging
  console.error("Unhandled rejection:", event.reason);

  // 3. REMOVED: Do not show global UI alert for background network errors. 
  // Real payment errors are handled in initializeStripePayment and confirmStripePayment.
});

const confirmStripePayment = async () => {
  if (!stripeInstance || !stripeElements || !stripePaymentElement || !activeClientSecret) {
    showPaymentStatus(
      getString("paymentUnavailable") || "Card payments are unavailable right now.",
      "error"
    );
    return;
  }

  if (payButton) {
    payButton.disabled = true;
    payButton.textContent = getString("payButtonProcessing") || "Processing...";
  }
  showPaymentStatus(getString("payButtonProcessing") || "Processing...");

  let confirmationResult;
  try {
    confirmationResult = await stripeInstance.confirmPayment({
      elements: stripeElements,
      confirmParams: {
        return_url: window.location.href,
      },
      redirect: "if_required",
    });
  } catch (err) {
    showPaymentStatus(
      err.message || getString("paymentFailed") || "Payment could not be completed.",
      "error"
    );
    if (payButton) {
      payButton.disabled = false;
      payButton.textContent = getString("payButtonLabel") || "Pay now";
    }
    return;
  }

  const { error, paymentIntent } = confirmationResult;

  if (error) {
    showPaymentStatus(
      error.message || getString("paymentFailed") || "Payment could not be completed.",
      "error"
    );
    if (payButton) {
      payButton.disabled = false;
      payButton.textContent = getString("payButtonLabel") || "Pay now";
    }
    return;
  }

  if (
    paymentIntent &&
    (paymentIntent.status === "succeeded" || paymentIntent.status === "processing")
  ) {
    // Hide the payment form
    if (successPanel) successPanel.style.display = "none";

    // Show the final success screen
    const finalSuccess = document.getElementById("finalSuccess");
    if (finalSuccess) finalSuccess.style.display = "block";

    // Show the footer with logo
    const successFooter = document.getElementById("successFooter");
    if (successFooter) successFooter.style.display = "block";

    // Scroll to it
    if (finalSuccess) finalSuccess.scrollIntoView({ behavior: "smooth" });

  } else {
    showPaymentStatus(
      getString("paymentUnavailable") || "Card payments are unavailable right now.",
      "error"
    );
    if (payButton) {
      payButton.disabled = false;
      payButton.textContent = getString("payButtonLabel") || "Pay now";
    }
  }
};

const getFirstName = (value) => value.trim().split(/\s+/)[0] || "";

const buildNameInputs = () => {
  const adultCount = Number(adultInput.value) || 0;
  const childCount = Number(childInput.value) || 0;
  const toddlerCount = Number(toddlerInput.value) || 0;

  const existingAdultValues = Array.from(adultList.querySelectorAll("input")).map(
    (input) => input.value.trim()
  );
  const existingChildValues = Array.from(childList.querySelectorAll("input")).map(
    (input) => input.value.trim()
  );
  const existingToddlerValues = Array.from(toddlerList.querySelectorAll("input")).map(
    (input) => input.value.trim()
  );

  adultList.innerHTML = "";
  childList.innerHTML = "";
  toddlerList.innerHTML = "";

  const defaultAdults = [
    getFirstName(primaryFirstNameEl.value),
    getFirstName(spouseFirstNameEl.value),
  ];

  for (let i = 0; i < adultCount; i += 1) {
    const wrapper = document.createElement("label");
    wrapper.textContent = `${getString("adultLabel") || "Adult"} ${i + 1}`;
    const input = document.createElement("input");
    input.type = "text";
    input.required = true;
    input.placeholder = getString("firstNamePlaceholder") || "First name";

    const defaultValue = defaultAdults[i];
    const previousValue = existingAdultValues[i] || "";

    if (defaultValue) {
      input.value = defaultValue;
      input.disabled = true;
      input.classList.add("prefilled");
    } else {
      input.value = previousValue;
    }

    wrapper.appendChild(input);
    adultList.appendChild(wrapper);
  }

  childTable.style.display = childCount ? "block" : "none";
  for (let i = 0; i < childCount; i += 1) {
    const wrapper = document.createElement("label");
    wrapper.textContent = `${getString("childLabel") || "Child"} ${i + 1}`;
    const input = document.createElement("input");
    input.type = "text";
    input.required = true;
    input.placeholder = getString("firstNamePlaceholder") || "First name";
    input.value = existingChildValues[i] || "";
    wrapper.appendChild(input);
    childList.appendChild(wrapper);
  }

  toddlerTable.style.display = toddlerCount ? "block" : "none";
  for (let i = 0; i < toddlerCount; i += 1) {
    const wrapper = document.createElement("label");
    wrapper.textContent = `${getString("toddlerLabel") || "Toddler"} ${i + 1}`;
    const input = document.createElement("input");
    input.type = "text";
    input.required = true;
    input.placeholder = getString("firstNamePlaceholder") || "First name";
    input.value = existingToddlerValues[i] || "";
    wrapper.appendChild(input);
    toddlerList.appendChild(wrapper);
  }
};

const enforceAdultMinimum = () => {
  const spouseFilled = Boolean(spouseFirstNameEl.value.trim());
  const minimumAdults = spouseFilled ? 2 : 1;
  adultInput.min = minimumAdults;
  let currentAdults = Number(adultInput.value) || minimumAdults;
  if (spouseFilled && currentAdults < minimumAdults) {
    currentAdults = minimumAdults;
  }
  if (!spouseFilled && currentAdults === 2) {
    currentAdults = minimumAdults;
  }
  adultInput.value = currentAdults;
  buildNameInputs();
};


primaryFirstNameEl.addEventListener("input", buildNameInputs);
spouseFirstNameEl.addEventListener("input", enforceAdultMinimum);
adultInput.addEventListener("input", () => {
  if (adultInput.value === "") return;
  buildNameInputs();
});
childInput.addEventListener("input", () => {
  if (childInput.value === "") return;
  buildNameInputs();
});
toddlerInput.addEventListener("input", () => {
  if (toddlerInput.value === "") return;
  buildNameInputs();
});
if (payButton) {
  payButton.addEventListener("click", (event) => {
    event.preventDefault();
    confirmStripePayment();
  });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusEl.style.display = "none";
  statusEl.textContent = "";
  statusEl.className = "status-message";
  resetPaymentUI();

  if (!validateRequiredFields()) {
    return;
  }

  const subtotal =
    Number(adultInput.value || 0) * COSTS.adult +
    Number(childInput.value || 0) * COSTS.child +
    Number(toddlerInput.value || 0) * COSTS.toddler;

  // Calculate Stripe fees (2.9% + $0.30)
  const fees = subtotal > 0 ? (subtotal * 0.029) + 0.30 : 0;
  const totalCostValue = subtotal + fees;

  const payload = {
    primaryFirstName: primaryFirstNameEl.value.trim(),
    primaryLastName: primaryLastNameEl.value.trim(),
    spouseFirstName: spouseFirstNameEl.value.trim() || null,
    phone: phoneInput.value.trim(),
    adults: Number(adultInput.value) || 0,
    children: Number(childInput.value) || 0,
    toddlers: Number(toddlerInput.value) || 0,
    adultNames: Array.from(adultList.querySelectorAll("input")).map((input) =>
      input.value.trim()
    ),
    childNames: Array.from(childList.querySelectorAll("input")).map((input) =>
      input.value.trim()
    ),
    toddlerNames: Array.from(toddlerList.querySelectorAll("input")).map((input) =>
      input.value.trim()
    ),
    totalCost: String(totalCostValue),
    sheetCost: String(subtotal),
    timestamp: new Date().toISOString(),
  };

  // Show spinner
  const submitLoader = document.getElementById("submit-loader");
  if (submitLoader) submitLoader.style.display = "block";

  statusEl.textContent = getString("submittingMessage") || "Submitting...";
  statusEl.classList.add("helper-text");
  statusEl.style.display = "block";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    let responseData = {};
    try {
      responseData = await response.json();
    } catch (parseError) {
      throw new Error(getString("serverResponseError") || "Unable to read server response.");
    }

    if (responseData.status !== "ok") {
      console.error("Submission Error Response:", responseData);
      throw new Error(responseData.message || responseData.paymentError || "Submission failed.");
    }

    form.reset();
    adultInput.value = spouseFirstNameEl.value.trim() ? 2 : 1;
    childInput.value = 0;
    toddlerInput.value = 0;
    buildNameInputs();

    statusEl.textContent = "";
    statusEl.className = "status-message";
    statusEl.style.display = "none";

    updateTotalDisplays(totalCostValue, fees);
    if (successPanel) {
      successPanel.style.display = "block";
    }

    form.style.display = "none";
    await initializeStripePayment(
      responseData.clientSecret,
      totalCostValue,
      responseData.paymentError
    );
  } catch (err) {
    console.error(err);
    statusEl.textContent = `Error: ${err.message || getString("genericError") || "Unknown error"}. ${getString("tryAgainMessage") || "Please try again."}`;
    statusEl.className = "status-message error";
    statusEl.style.display = "block";
    if (successPanel) {
      successPanel.style.display = "none";
    }
    resetPaymentUI();
  } finally {
    // Hide spinner
    if (submitLoader) submitLoader.style.display = "none";
  }
});

applyTranslations();
buildNameInputs();
