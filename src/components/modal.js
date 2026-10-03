import styles from '@/styles/modules/modal.module.scss';

export function createModal() {
  const dialog = document.createElement('dialog');
  dialog.id = 'modal';
  dialog.className = styles.modal;
  document.body.append(dialog);

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = styles.closeButton;
  closeButton.textContent = 'close';

  closeButton.addEventListener('click', () => dialog.close());

  const close = () => dialog.close();
  addEventListener('app:modal-close', close);

  const contentContainer = document.createElement('div');

  dialog.append(closeButton, contentContainer);

  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();

    const isClickOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (isClickOutside) {
      dialog.close();
    }
  });

  return {
    open(content) {
      contentContainer.replaceChildren(
        typeof content === 'string' ? document.createTextNode(content) : content
      );
      dialog.showModal();
    },
    close() {
      dialog.close();
    },
  };
}
