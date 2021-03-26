import Reconciler from "react-reconciler";

const hostConfig = {
  now: Date.now(),
  supportsMutation: true,
  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    const $el = document.createElement(type);
    if (props.className) {
      $el.className = props.className;
    }

    if (props.src) {
      $el.src = props.src;
    }

    if (props.alt) {
      $el.alt = props.alt;
    }

    if (props.onClick) {
      $el.addEventListener("click", props.onClick);
    }

    if (props.style) {
      for (const p in props.style) {
        $el.style[p] = props.style[p];
      }
    }

    return $el;
  },
  appendInitialChild(parentInstance, child) {
    parentInstance.appendChild(child);
  },
  shouldSetTextContent(type, props) {},
  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    return document.createTextNode(text);
  },
  appendChild(parentInstance, child) {
    parentInstance.appendChild(child);
  },
  appendChildToContainer(container, child) {
    container.appendChild(child);
  },
  removeChild(parentInstance, child) {
    parentInstance.removeChild(child);
  },
  removeChildFromContainer(container, child) {
    container.removeChild(child);
  },
  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) {
    if (oldProps !== newProps) {
      return newProps;
    }
  },
  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    internalInstanceHandle
  ) {
    if (updatePayload.style) {
      for (const p in updatePayload.style) {
        instance.style[p] = updatePayload.style[p];
      }
    }
  },
  commitTextUpdate(textInstance, oldText, newText) {},
  finalizeInitialChildren(
    instance,
    type,
    props,
    rootContainerInstance,
    hostContext
  ) {},
  // -----
  shouldDeprioritizeSubtree(type, props) {},
  commitMount(instance, type, newProps, internalInstanceHandle) {},
  resetTextContent(instance) {},
  insertBefore(parentInstance, child, beforeChild) {},
  insertInContainerBefore(container, child, beforeChild) {},
  clearContainer(container, child) {},
  getRootHostContext(rootContainerInstance) {},
  getChildHostContext(parentHostContext, type, rootContainerInstance) {},
  getPublicInstance(instance) {},
  prepareForCommit(containerInfo) {},
  resetAfterCommit(containerInfo) {},
};

const reconciler = Reconciler(hostConfig);

const registerApp = {
  render(App, containerEl) {
    const container = reconciler.createContainer(containerEl, false, false);
    reconciler.updateContainer(App, container, null, null);
  },
};

export default registerApp;
