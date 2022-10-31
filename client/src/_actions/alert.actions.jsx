import { useSetRecoilState, useResetRecoilState } from 'recoil';

import { alertAtom } from '../_state/alert';

export { useAlertActions };

function useAlertActions () {
    const setAlert = useSetRecoilState(alertAtom);
    const resetAlert = useResetRecoilState(alertAtom);

    return {
        success: message => setAlert({ message, type: 'alert-success' }),
        error: message => setAlert({ message, type: 'alert-danger' }),
        clear: message =>resetAlert({ message, type: 'alert-clear' })
    }
}