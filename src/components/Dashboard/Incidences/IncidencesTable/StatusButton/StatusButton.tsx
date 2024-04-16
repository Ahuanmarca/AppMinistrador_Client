import * as React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { DotFilledIcon } from '@radix-ui/react-icons';
import styles from './StatusButton.module.css';
import { DashboardContext } from '../../../../../contexts/DashboardContext';

// const ENDPOINT='http://localhost:8000/incidences/update/status';
const ENDPOINT='https://appministrador-server-tob7.onrender.com/incidences/update/status';

const BUTTON_COLOR = {
  pendiente: '#C33F38',
  solucionado: '#0C6638',
  activo: '#FFA500',
};

const BUTTON_TEXT = {
  pendiente: 'Pendiente',
  solucionado: 'Solucionado',
  activo: 'Activo',
};

function StatusButton({ id, status }) {
  // @ts-expect-error - What is the type of the context value?
  const { data, updateDashboardData } = React.useContext(DashboardContext);
  const token = localStorage.token;
  const buildingId = data.buildingData.id;

  // buttonCondition is to know it's status while request is being processed
  type ButtonCondition = 'idle' | 'loading' | 'success' | 'error';
  const [buttonCondition, setButtonCondition] = React.useState<ButtonCondition>('idle');

  // 'status' is the current status of the incidence
  async function handleStatusChange(e) {
    setButtonCondition('loading');

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
        body: JSON.stringify({
          id: id,
          status: e,
        }),
      });
      const json = await response.json();
      
      console.log({ updatedIncidence: json});
      updateDashboardData({ buildingId: buildingId, accountId: buildingId });
      setButtonCondition('success');
    } catch (err) {
      setButtonCondition('error');
    }
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          disabled={buttonCondition === 'loading'}
          style={{
            height: '20px',
            width: '84px',
            borderRadius: '12px',
            backgroundColor: BUTTON_COLOR[status],
            color: 'white',
            cursor: 'pointer',
            userSelect: 'none',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>{BUTTON_TEXT[status]}</p>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Label className={styles.DropdownMenuLabel}>Actualizar</DropdownMenu.Label>
          <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />

          <DropdownMenu.RadioGroup onValueChange={handleStatusChange} value={status}>
            <DropdownMenu.RadioItem className={styles.DropdownMenuRadioItem} value={'pendiente'}>
              <DropdownMenu.ItemIndicator className={styles.DropdownMenuItemIndicator}>
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Pendiente
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem className={styles.DropdownMenuRadioItem} value={'activo'}>
              <DropdownMenu.ItemIndicator className={styles.DropdownMenuItemIndicator}>
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Activo
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem className={styles.DropdownMenuRadioItem} value={'solucionado'}>
              <DropdownMenu.ItemIndicator className={styles.DropdownMenuItemIndicator}>
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Solucionado
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default StatusButton;
