const state = {
  orders: {
    id: 0,
    values: [],
  },
};

function createOrder(data) {
  const id = state.orders.id;
  try {
    state.orders.id++;
    state.orders.values.push(
      createOrderValueTemplate({
        id: state.orders.id,
        status: data.status,
      }),
    );
  } catch (e) {
    alert(e.message);
    state.orders.id = id;
  }
}

function modifyOrder(data) {
  const id = data.id;
  for (const order of state.orders.values) {
    if (order.id === id) {
      order.status = data.status;
    }
  }
}

function createOrderValueTemplate(data) {
  return {
    id: data.id,
    status: data.status,
    name: `Pedido #${data.id.toString().padStart(10)}`,
  };
}

function createOrderElement(data) {
  const { name } = data;

  const element = document.createElement("div");
  element.classList.add("card");
  element.id = data.id;

  const nameElement = document.createElement("p");
  nameElement.textContent = name;

  element.appendChild(nameElement);
  element.appendChild(createOrderElementActions(data));

  return element;
}

function createOrderElementActions(data) {
  const { status } = data;

  const element = document.createElement("div");

  switch (status) {
    case "received": {
      createOrderElementReceivedActions(data, element);
      break;
    }
    case "in-production": {
      createOrderElementInProductionActions(data, element);
      break;
    }
    case "ready": {
      createOrderElementReadyActions(data, element);
      break;
    }
    case "dispatched": {
      createOrderElementDispatchedActions(data, element);
      break;
    }
    case "done": {
      createOrderElementDoneActions(data, element);
      break;
    }
  }

  return element;
}

function createOrderElementReceivedActions(data, element) {
  element.innerHTML = `
    <button class="production button">
        Enviar para produção
    </button>
    <button class="remove button">
        Remover
    </button>
    `;

  const sendButton = element.querySelector("button.production.button");
  const removeButton = element.querySelector("button.remove.button");

  sendButton.addEventListener("click", () => {
    modifyOrder({ id: data.id, status: "in-production" });
    renderOrdersOnContainerElements();
  });
  removeButton.addEventListener("click", () => {
    document.getElementById(data.id).remove();
  });
}

function createOrderElementInProductionActions(data, element) {
  element.innerHTML = `
    <button class="ready button">
        Marcar como pronto
    </button>
    <button class="remove button">
        Remover
    </button>
    `;

  const readyButton = element.querySelector("button.ready.button");
  const removeButton = element.querySelector("button.remove.button");

  readyButton.addEventListener("click", () => {
    modifyOrder({ id: data.id, status: "ready" });
    renderOrdersOnContainerElements();
  });
  removeButton.addEventListener("click", () => {
    document.getElementById(data.id).remove();
  });
}

function createOrderElementReadyActions(data, element) {
  element.innerHTML = `
    <button class="dispatch button">
        Despachar
    </button>
    <button class="remove button">
        Remover
    </button>
    `;

  const dispatchButton = element.querySelector("button.dispatch.button");
  const removeButton = element.querySelector("button.remove.button");

  dispatchButton.addEventListener("click", () => {
    modifyOrder({ id: data.id, status: "dispatched" });
    renderOrdersOnContainerElements();
  });
  removeButton.addEventListener("click", () => {
    document.getElementById(data.id).remove();
  });
}

function createOrderElementDispatchedActions(data, element) {
  element.innerHTML = `
    <button class="done button">
        Marcar como entregue
    </button>
    <button class="remove button">
        Remover
    </button>
    `;

  const doneButton = element.querySelector("button.done.button");
  const removeButton = element.querySelector("button.remove.button");

  doneButton.addEventListener("click", () => {
    modifyOrder({ id: data.id, status: "done" });
    renderOrdersOnContainerElements();
  });
  removeButton.addEventListener("click", () => {
    document.getElementById(data.id).remove();
  });
}

function createOrderElementDoneActions(data, element) {
  element.innerHTML = `
    <button class="remove button">
        Remover
    </button>
    `;

  const removeButton = element.querySelector("button.remove.button");

  removeButton.addEventListener("click", () => {
    document.getElementById(data.id).remove();
  });
}

function clearOrdersContainerElements() {
  clearOrdersContainerElement(
    document.querySelector("#received-orders-container"),
  );
  clearOrdersContainerElement(
    document.querySelector("#in-production-orders-container"),
  );
  clearOrdersContainerElement(
    document.querySelector("#ready-orders-container"),
  );
  clearOrdersContainerElement(
    document.querySelector("#dispatched-orders-container"),
  );
  clearOrdersContainerElement(document.querySelector("#done-orders-container"));
}

function clearOrdersContainerElement(element) {
  for (const e of [...element.children]) {
    e.remove();
  }
}

function renderOrdersOnContainerElements() {
  clearOrdersContainerElements();
  for (const order of state.orders.values) {
    switch (order.status) {
      case "received": {
        document
          .querySelector("#received-orders-container")
          .appendChild(createOrderElement(order));
        break;
      }
      case "in-production": {
        document
          .querySelector("#in-production-orders-container")
          .appendChild(createOrderElement(order));
        break;
      }
      case "ready": {
        document
          .querySelector("#ready-orders-container")
          .appendChild(createOrderElement(order));
        break;
      }
      case "dispatched": {
        document
          .querySelector("#dispatched-orders-container")
          .appendChild(createOrderElement(order));
        break;
      }
      case "done": {
        document
          .querySelector("#done-orders-container")
          .appendChild(createOrderElement(order));
        break;
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 3; i++) {
    createOrder({ status: "received" });
  }

  renderOrdersOnContainerElements();

  document.getElementById("add-new-order").addEventListener("click", () => {
    createOrder({ status: "received" });
    renderOrdersOnContainerElements();
  });
});
