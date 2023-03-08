import React, {MouseEventHandler} from 'react';
import ReactDOM from 'react-dom';
import {Button} from "../../components/Button";
import {StyledNotification, StyledNotificationBody} from "./Notification.styled";

interface NotificationProps {
    message?: string;
    isOpen: boolean;
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Notification =({ message, isOpen, onClose }: NotificationProps):JSX.Element | null => {
    if (!isOpen) return null
    return ReactDOM.createPortal(
        <StyledNotification>
            <StyledNotificationBody>
                <span>{message ? message : "Loading..."}</span>
                {
                    message ? <Button onClick={onClose}>Close</Button> : null
                }
            </StyledNotificationBody>

        </StyledNotification>,
        document.getElementById('portal')  as HTMLElement)
};