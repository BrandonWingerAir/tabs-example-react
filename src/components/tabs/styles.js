import styled, { css } from 'styled-components';

export const TabHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledTab = styled.button`
    color: #fff;
    width: 100%;
    padding: 20px 0;
    font-size: 1.25rem;
    background-color: transparent;
    border: none;
    cursor: ${(p) => (p.disabled ? "default" : "pointer")};
    ${(p) =>
        p.active && 
        css
            `color: #00adb5;`
    }
    ${(p) => !p.active && p.inactiveStyle}
`;

export const StyledTabPanel = styled.div`
    display: ${(p) => (p.active ? 'flex' : 'none')};
    font-size: 4rem;
    background: #393e46;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
`;

// TODO: flex-direction: column; (Mobile Screens)
export const TabsNav = styled.div`
    display: flex;
`;

export const inactiveTab = {
    opacity: 0.65
}