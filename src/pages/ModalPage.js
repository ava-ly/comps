import { useState } from 'react';
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I accept</Button>
        </div>
    );
    
    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important agreement for you to accept
            </p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis suscipit ultrices. Nunc vitae velit consequat, auctor arcu vitae, dapibus tortor. Mauris et cursus nulla. Donec euismod orci pulvinar tortor suscipit lacinia. Nunc non porta lacus. Mauris placerat ante lacus, id sodales odio ullamcorper eget. Mauris est libero, ultricies vel augue ac, vestibulum iaculis nunc. Curabitur finibus elementum dui sit amet aliquet. Duis dictum arcu eget dolor euismod, ac pharetra purus eleifend. Phasellus ut consequat est, vitae bibendum lectus. Maecenas sagittis mi sit amet nibh convallis, ut eleifend nisl dictum. Maecenas semper quis sapien non porta. Suspendisse condimentum et ante sit amet pulvinar. Cras gravida vel nisi eu blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis suscipit ultrices. Nunc vitae velit consequat, auctor arcu vitae, dapibus tortor. Mauris et cursus nulla. Donec euismod orci pulvinar tortor suscipit lacinia. Nunc non porta lacus. Mauris placerat ante lacus, id sodales odio ullamcorper eget. Mauris est libero, ultricies vel augue ac, vestibulum iaculis nunc. Curabitur finibus elementum dui sit amet aliquet. Duis dictum arcu eget dolor euismod, ac pharetra purus eleifend. Phasellus ut consequat est, vitae bibendum lectus. Maecenas sagittis mi sit amet nibh convallis, ut eleifend nisl dictum. Maecenas semper quis sapien non porta. Suspendisse condimentum et ante sit amet pulvinar. Cras gravida vel nisi eu blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis suscipit ultrices. Nunc vitae velit consequat, auctor arcu vitae, dapibus tortor. Mauris et cursus nulla. Donec euismod orci pulvinar tortor suscipit lacinia. Nunc non porta lacus. Mauris placerat ante lacus, id sodales odio ullamcorper eget. Mauris est libero, ultricies vel augue ac, vestibulum iaculis nunc. Curabitur finibus elementum dui sit amet aliquet. Duis dictum arcu eget dolor euismod, ac pharetra purus eleifend. Phasellus ut consequat est, vitae bibendum lectus. Maecenas sagittis mi sit amet nibh convallis, ut eleifend nisl dictum. Maecenas semper quis sapien non porta. Suspendisse condimentum et ante sit amet pulvinar. Cras gravida vel nisi eu blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis suscipit ultrices. Nunc vitae velit consequat, auctor arcu vitae, dapibus tortor. Mauris et cursus nulla. Donec euismod orci pulvinar tortor suscipit lacinia. Nunc non porta lacus. Mauris placerat ante lacus, id sodales odio ullamcorper eget. Mauris est libero, ultricies vel augue ac, vestibulum iaculis nunc. Curabitur finibus elementum dui sit amet aliquet. Duis dictum arcu eget dolor euismod, ac pharetra purus eleifend. Phasellus ut consequat est, vitae bibendum lectus. Maecenas sagittis mi sit amet nibh convallis, ut eleifend nisl dictum. Maecenas semper quis sapien non porta. Suspendisse condimentum et ante sit amet pulvinar. Cras gravida vel nisi eu blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis suscipit ultrices. Nunc vitae velit consequat, auctor arcu vitae, dapibus tortor. Mauris et cursus nulla. Donec euismod orci pulvinar tortor suscipit lacinia. Nunc non porta lacus. Mauris placerat ante lacus, id sodales odio ullamcorper eget. Mauris est libero, ultricies vel augue ac, vestibulum iaculis nunc. Curabitur finibus elementum dui sit amet aliquet. Duis dictum arcu eget dolor euismod, ac pharetra purus eleifend. Phasellus ut consequat est, vitae bibendum lectus. Maecenas sagittis mi sit amet nibh convallis, ut eleifend nisl dictum. Maecenas semper quis sapien non porta. Suspendisse condimentum et ante sit amet pulvinar. Cras gravida vel nisi eu blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis suscipit ultrices. Nunc vitae velit consequat, auctor arcu vitae, dapibus tortor. Mauris et cursus nulla. Donec euismod orci pulvinar tortor suscipit lacinia. Nunc non porta lacus. Mauris placerat ante lacus, id sodales odio ullamcorper eget. Mauris est libero, ultricies vel augue ac, vestibulum iaculis nunc. Curabitur finibus elementum dui sit amet aliquet. Duis dictum arcu eget dolor euismod, ac pharetra purus eleifend. Phasellus ut consequat est, vitae bibendum lectus. Maecenas sagittis mi sit amet nibh convallis, ut eleifend nisl dictum. Maecenas semper quis sapien non porta. Suspendisse condimentum et ante sit amet pulvinar. Cras gravida vel nisi eu blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis suscipit ultrices. Nunc vitae velit consequat, auctor arcu vitae, dapibus tortor. Mauris et cursus nulla. Donec euismod orci pulvinar tortor suscipit lacinia. Nunc non porta lacus. Mauris placerat ante lacus, id sodales odio ullamcorper eget. Mauris est libero, ultricies vel augue ac, vestibulum iaculis nunc. Curabitur finibus elementum dui sit amet aliquet. Duis dictum arcu eget dolor euismod, ac pharetra purus eleifend. Phasellus ut consequat est, vitae bibendum lectus. Maecenas sagittis mi sit amet nibh convallis, ut eleifend nisl dictum. Maecenas semper quis sapien non porta. Suspendisse condimentum et ante sit amet pulvinar. Cras gravida vel nisi eu blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis suscipit ultrices. Nunc vitae velit consequat, auctor arcu vitae, dapibus tortor. Mauris et cursus nulla. Donec euismod orci pulvinar tortor suscipit lacinia. Nunc non porta lacus. Mauris placerat ante lacus, id sodales odio ullamcorper eget. Mauris est libero, ultricies vel augue ac, vestibulum iaculis nunc. Curabitur finibus elementum dui sit amet aliquet. Duis dictum arcu eget dolor euismod, ac pharetra purus eleifend. Phasellus ut consequat est, vitae bibendum lectus. Maecenas sagittis mi sit amet nibh convallis, ut eleifend nisl dictum. Maecenas semper quis sapien non porta. Suspendisse condimentum et ante sit amet pulvinar. Cras gravida vel nisi eu blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis suscipit ultrices. Nunc vitae velit consequat, auctor arcu vitae, dapibus tortor. Mauris et cursus nulla. Donec euismod orci pulvinar tortor suscipit lacinia. Nunc non porta lacus. Mauris placerat ante lacus, id sodales odio ullamcorper eget. Mauris est libero, ultricies vel augue ac, vestibulum iaculis nunc. Curabitur finibus elementum dui sit amet aliquet. Duis dictum arcu eget dolor euismod, ac pharetra purus eleifend. Phasellus ut consequat est, vitae bibendum lectus. Maecenas sagittis mi sit amet nibh convallis, ut eleifend nisl dictum. Maecenas semper quis sapien non porta. Suspendisse condimentum et ante sit amet pulvinar. Cras gravida vel nisi eu blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis suscipit ultrices. Nunc vitae velit consequat, auctor arcu vitae, dapibus tortor. Mauris et cursus nulla. Donec euismod orci pulvinar tortor suscipit lacinia. Nunc non porta lacus. Mauris placerat ante lacus, id sodales odio ullamcorper eget. Mauris est libero, ultricies vel augue ac, vestibulum iaculis nunc. Curabitur finibus elementum dui sit amet aliquet. Duis dictum arcu eget dolor euismod, ac pharetra purus eleifend. Phasellus ut consequat est, vitae bibendum lectus. Maecenas sagittis mi sit amet nibh convallis, ut eleifend nisl dictum. Maecenas semper quis sapien non porta. Suspendisse condimentum et ante sit amet pulvinar. Cras gravida vel nisi eu blandit.
            </p>
        </div>
    );
};

export default ModalPage;