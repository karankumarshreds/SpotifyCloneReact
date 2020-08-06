const SideBarOption = ({ Icon, title }) => {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h5>{title}</h5> : <p>{title}</p>}
        </div>
    )
}
export default SideBarOption;