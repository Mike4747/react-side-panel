import * as React from 'react';
import styles from './SidePanel.module.scss';
import { ISidePanelProps } from './ISidePanelProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Button, ButtonType } from 'office-ui-fabric-react';

import Panel from '../Panel/Panel';
import { PanelPosition } from '../Panel/Panel';


export interface ISidePanelState {
  isOpen?: boolean;
}

export default class SidePanel extends React.Component<ISidePanelProps, ISidePanelState> {
  public constructor(props: ISidePanelProps, state: ISidePanelState) {
    super(props, state);
    this.state = {};

  }



  public render(): React.ReactElement<ISidePanelProps> {
    const panelPosition = !this.props.panelPosition && this.props.panelPosition !== 0 
      ? PanelPosition.Right : this.props.panelPosition;
    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
        <div className={styles.bg}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
          <div className={`ms-Grid-col ms-sm12 ${styles.headRow}`}>
            <div className={`ms-font-1 ms-fontColor-white ${styles.head}`}>Global Service Desk</div>
           <div style={{borderBottom : "1px solid #ddd "}} > </div>
           <ul style={{paddingLeft : "20px", marginBottom : "5px"}}>
              <li className={`ms-font-l ms-fontColor-white ${styles.headP}`}>Get IT Support </li>
              <li className={`ms-font-l ms-fontColor-white ${styles.headP1}`}>Report Suspicious Activity</li>
              </ul>
              </div>
              </div>
              <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row1}`}>
              <span className={`hiddenSm ${styles.phone}`}> US: 888.647.3030 &nbsp; WW: 631.327.6120</span>
              <Button className={styles.goButton} onClick={this.onButtonClick.bind(this)} buttonType={ButtonType.default}>{this.state.isOpen ? 'Close' : 'Go'}</Button>
            </div>
            </div> 
        </div>
        <Panel isOpen={this.state.isOpen} position={panelPosition} onDismiss={this.onPanelClosed.bind(this)}>

        </Panel>
      </div>
    );
  }

  private onPanelClosed() {
    this.setState({
      isOpen: false
    });
  }

  private onButtonClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}
