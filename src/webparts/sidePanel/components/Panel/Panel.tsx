import * as React from 'react';
import { Layer, IconButton, IButtonProps } from 'office-ui-fabric-react';
import * as classnames from 'classnames';
import { SPComponentLoader } from '@microsoft/sp-loader';
import styles from './Panel.module.scss';

export enum PanelPosition {
    Left,
    Right
}

export interface IPanelProps {
    isOpen?: boolean;
    position?: PanelPosition;
    onDismiss?: () => void;
}

export interface IPanelState {
    isOpen?: boolean;
    isVisible?: boolean;
}

export default class Panel extends React.Component<IPanelProps, IPanelState> {
    private _onCloseTimer: number;
    private _onOpenTimer: number;




    public constructor(props: IPanelProps, state: IPanelState) {
        super(props, state);

        this.state = {
            isOpen: this.props.isOpen
        };

		SPComponentLoader.loadCss("https://arrowelectronics.sharepoint.com/:u:/r/sites/globalenterpriseservices/SiteAssets/bootstrap-4/css/bootstrap.min.css?csf=1&e=OHr3yM");


    }

    public componentWillReceiveProps(newProps: IPanelProps) {
        if (newProps.isOpen === this.props.isOpen)
            return;
        //
        // From https://github.com/OfficeDev/office-ui-fabric-react/blob/master/packages/office-ui-fabric-react/src/components/Modal/Modal.tsx
        //
        clearTimeout(this._onCloseTimer);

        if (newProps.isOpen) {
            if (!this.state.isOpen) {
                this.setState({
                    isOpen: true
                });
            }
            else {
                this.setState({
                    isVisible: true
                });
            }
        }

        if (!newProps.isOpen && this.state.isOpen) {
            this._close();
        }
    }

    public componentDidUpdate(prevProps: IPanelProps, prevState: IPanelState) {
        if (!prevProps.isOpen && !prevState.isVisible && this.state.isOpen) {
            setTimeout(this._onOpen.bind(this), 45); // just to set open class a little bit later to have animation
        }
    }





    public render(): JSX.Element {
        if (!this.state.isOpen)
            return null;

        const optionalClasses: any = {};
        optionalClasses[styles.visible] = this.state.isVisible;
        optionalClasses[styles.left] = this.props.position === PanelPosition.Left;
        optionalClasses[styles.right] = this.props.position === PanelPosition.Right;
        const className = classnames(styles.panel, optionalClasses);

        return (
            <Layer>
                <div className={className}>
                    <div className={styles.header}><div  style={{color : "#fff", fontWeight : "normal", fontSize : "24px", padding : "15px 0px 0px 30px ", float : "left"}}>Global Service Desk</div>
                        <div className={`btn btn-default ${styles.btnDefault}`}  style={{borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px", border : "1px solid #fff", color : "#fff" , margin : "15px 0px 0px 30px"}} onClick={this.onDismiss.bind(this)}>X</div>
</div>
                    <div className={styles.content}>
                        {this.props.children} 

<div className={`ms-Grid`}>
 
   <div className={`ms-Grid-row `} >
   <div className={`ms-Grid-col ms-sm12 ${styles.headCol}`}  style={{padding : "0px"}} >
   <br/>

   <div className="card"  style={{borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}} >
    <div className="card-body" style={{padding : "15px 20px 20px 20px"}} >
    <h5 className="card-title">Contact Us</h5>
  
    <ul  className="list-unstyled"  style={{marginBottom : "0px" , marginTop : "15px"}}>


    <li className={styles.region} style={{ borderBottom : "1px solid #ddd", marginBottom : "3px"}}>AMERICAS</li>
<li>1-888-647-3030 <span  className="badge badge-light badge-pill float-right" ></span>
  </li>
  <li className={styles.region} style={{borderBottom : "1px solid #ddd", marginBottom : "3px", marginTop : "10px"}}>APAC</li><li>
   10014
    <span  className="badge badge-light badge-pill float-right" style={{fontWeight :"normal" }}  >Mandarin</span>
  </li>
<li>
    10013
    <span  className="badge badge-light badge-pill float-right"  style={{fontWeight :"normal" }}  >English</span>
  </li>    <li className={styles.region} style={{ borderBottom : "1px solid #ddd", marginBottom : "3px", marginTop : "10px"}}>EMEA GC / AVR</li><li>
   +49 6102 5030 8555
    <span  className="badge badge-light badge-pill float-right"  style={{fontWeight :"normal" , background : "#eee", borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}}  >CE</span>
  </li><li>
 +44 1279 455 599
 <span  className="badge badge-light badge-pill float-right"  style={{fontWeight :"normal" , background : "#eee", borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}}  >NE</span>
  </li><li>
    +39 02 66143 555
    <span  className="badge badge-light badge-pill float-right"  style={{fontWeight :"normal" , background : "#eee", borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}}  >SE</span>
  </li>     <li className={styles.region} style={{ borderBottom : "1px solid #ddd", marginBottom : "3px", marginTop : "10px"}}>EMEA ECS</li><li>
    +44 870 366 8534
    <span  className="badge badge-light badge-pill float-right"  style={{fontWeight :"normal" , background : "#eee", borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}}  >UK</span>
  </li>
<li>
  +45 3057 1111
  <span  className="badge badge-light badge-pill float-right"  style={{fontWeight :"normal" , background : "#eee", borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}}  >Nordics</span>
  </li>
<li>
    +49 89 93099 101
    <span  className="badge badge-light badge-pill float-right"  style={{fontWeight :"normal" , background : "#eee", borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}}  >Germany</span>
  </li>
<li>
    +33 14 9974928
    <span  className="badge badge-light badge-pill float-right"  style={{fontWeight :"normal" , background : "#eee", borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}}  >France</span>
  </li>     <li className={styles.region}  style={{borderBottom : "1px solid #ddd", marginBottom : "3px", marginTop : "10px"}}>INTERNATIONAL</li><li>
   1-631-847-6120
    <span  className="badge badge-light badge-pill float-right"  ></span>
  </li>
  </ul>


       </div>
     </div>
     <br/>
   <div className="card" style={{borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}}>
   <div className="card-body" style={{padding : "15px 20px 15px 20px"}} >
   <h5 className="card-title">Report Suspicious Activity</h5>
   <p className="card-text">Create and track IT security reports online.</p>
   <a  className={`btn btn-danger btn-sm btn-block `}  style={{borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}}    title="Login requires network access" target="_blank"  href="http://pmgreports.arrow.com/itportal/login.php">Security Tickets</a>
  
   <div><small> *Requires network access</small></div>
       

      </div>
    </div>

    <br/>
    
    <div className="card"  style={{borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}}>
    <div className="card-body" style={{padding : "15px 20px 15px 20px"}} >
    <h5 className="card-title">Online IT Support</h5>
    <p className="card-text">Create and track IT service request tickets online.</p>
    <a  className={`btn btn-secondary btn-sm btn-block `}  style={{borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}}     title="Login requires network access" target="_blank"  href="http://pmgreports.arrow.com/itportal/login.php">Service Tickets</a>
    <div><small> *Requires network access</small></div>

        
 
       </div>
     </div>
     <br/>
    
    <div className="card"  style={{borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}}>
    <div className="card-body" style={{padding : "15px 20px 15px 20px"}} >
    <h5 className="card-title">Online IT e-Store</h5>
    <p className="card-text">Order and track hardware, software, peripherals and accessories online.</p>
    <a  className={`btn btn-secondary btn-sm btn-block `}  style={{borderBottomLeftRadius : "0px" , borderBottomRightRadius : "0px", borderTopLeftRadius : "0px", borderTopRightRadius : "0px"}}  title="Login requires network access" target="_blank"  href="http://itstore.arrow.com/">e-Store Orders</a>
    <div><small> *Requires network access</small></div>
        
 
       </div>
     </div>

    
    


    </div> </div>

</div>
                    </div>
                </div>
            </Layer>);
    }

    private onDismiss() {
        this._close();
    }

    private _close() {
        this._onCloseTimer = setTimeout(this._onClose.bind(this), parseFloat(styles.duration));
        this.setState({
            isVisible: false
        });
    }

    private _onOpen() {
        this.setState({
            isVisible: true
        });
    }

    private _onClose() {
        this.setState({
            isOpen: false
        });

        if (this.props.onDismiss)
            this.props.onDismiss();
    }
}