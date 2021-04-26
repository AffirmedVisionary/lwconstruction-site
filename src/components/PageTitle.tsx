type PageTitleProps = {
    text: string
}

const PageTitle = (props: PageTitleProps) => {
    return (
        <h1 className='primary-page-title'>{ props.text }</h1>
        )
}

PageTitle.displayName = "PageTitle"
export default PageTitle