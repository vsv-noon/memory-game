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

  const contentContainer = document.createElement('div');

  dialog.append(closeButton, contentContainer);

  const close = () => {
    dialog.close();
    document.body.style.overflow = '';
  };

  closeButton.addEventListener('click', () => close());

  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    close();
  });

  addEventListener('app:modal-close', close);

  const open = (content) => {
    contentContainer.replaceChildren(
      typeof content === 'string' ? document.createTextNode(content) : content
    );

    dialog.showModal();
    document.body.style.overflow = 'hidden';
  };

  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();

    const isClickOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (!isClickOutside) {
      return;
    }

    close();
  });

  return { open, close };
}
