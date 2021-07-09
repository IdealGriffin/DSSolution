const Pagination = ({pnt, currentPage, total, perPage, setPage}) => {

    function setPage(page){
        pnt.state.currentPage=page
        pnt.getNotice();
    }

    let pageNumbers=[];
    let maxPage=total/perPage;
    for(let i=parseInt((currentPage-1)/10)*10;i<maxPage;i++){
        pageNumbers.push(i+1)
        if(pageNumbers.length===10) break
    }
    return (
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                {currentPage>1 &&
                    <li class="page-item">
                        <a class="page-link" onClick={() => setPage(currentPage-1)} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                }
                {pageNumbers.map((number)=>{
                    return(
                        <li class={"page-item"+(number===currentPage&&" active")}><a class="page-link" onClick={() => setPage(number)}>{number}</a></li>
                    )
                })}
                {currentPage<maxPage &&
                    <li class="page-item">
                        <a class="page-link" onClick={() => setPage(currentPage+1)} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                }
            </ul>
        </nav>
    );
}

export default Pagination
