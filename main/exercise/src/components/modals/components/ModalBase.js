export default function Modal(props){
    return (
        <div className="modal d-block" >
            <div className="modal-diablog">
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}