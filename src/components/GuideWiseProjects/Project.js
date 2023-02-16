import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useContext } from "react";
import ChartContext from "../../context/ChartContext";
import { useParams } from "react-router-dom";

const Project = () => {
  let { languages, setfilter } = useContext(ChartContext);
  const { fname} = useParams();

  const buttonStyle = {
    background: "linear-gradient(#009FFD, #2A2A72)",
    color: "#fff",
  };
  const spanStyle = {
    color: "#fff",
  };

  const [myData, setMyData] = useState([]);
  const [myData2, setMyData2] = useState([]);
  const [isError, setIsError] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(9);

  //this is for react paginate
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  //Let one usestate for filterdata

  const [OriginalData, setOriginalData] = useState([]);
  const [query, setQuery] = useState("");

  //modal filter
  const [formdata, setFormdata] = useState({
    batch: "",
    type: "",
    area: "",
    language: "",
    professor: "",
  });
  const { batch, type, area, language, professor } = formdata;

  //search data
  const [searchform, setSearchform] = useState({ search: "" });
  const { search } = searchform;

  //Let 2 variable to store api for multiple api roting

  let first =
    "https://department-website.onrender.com/Project_2019-2020/?format=json";
  let second =
    "https://department-website.onrender.com/Project_2020-2021/?format=json";

  const res = axios.get(first);
  const res2 = axios.get(second);

  const handlesearchsubmit = (event) => {
    event.preventDefault();
    const filters2 = {
      search: searchform.search.toLowerCase(),
    };

    // console.log(getSearch);

    const searchdata = OriginalData.filter(
      (item) =>
        item.Project_name.toLowerCase().includes(filters2.search) ||
        item.Batch.toString().includes(filters2.search.toString()) ||
        item.Abstract.toLowerCase().includes(filters2.search) ||
        item.Internal_guide.toLowerCase().includes(filters2.search) ||
        item.Leader_name.toLowerCase().includes(filters2.search) ||
        item.Project_type.toLowerCase().includes(filters2.search) ||
        item.Langauge.toLowerCase().includes(filters2.search) ||
        item.Project_area.toLowerCase().includes(filters2.search)
    );

    setData(searchdata);
  };
  //this is for filter by chart click
  const searchbychart = (l, rdata) => {
    const filters3 = {
      search2: l.toLowerCase(),
    };

    // console.log(getSearch);

    const searchdata2 = rdata.filter(
      (item) =>
        item.Project_name.toLowerCase().includes(l.toLowerCase()) ||
        item.Abstract.toLowerCase().includes(l.toLowerCase()) ||
        item.Langauge.toLowerCase().includes(l.toLowerCase()) ||
        item.Project_area.toLowerCase().includes(l.toLowerCase())
    );

    setData(searchdata2);
    setfilter("");
  };

  //for filter
  const handlesearch = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    setSearchform({ ...searchform, [name]: value });
  };

  const handleChangeInput = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    // console.log(name,value.toLowerCase());
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filters = {
      batch: formdata.batch.toString(),
      type: formdata.type.toLowerCase(),
      area: formdata.area.toLowerCase(),
      language: formdata.language.toLowerCase(),
      professor: formdata.professor.toLowerCase(),
    };

    const out = OriginalData.filter(
      (item) =>
        item.Batch.toString().includes(filters.batch) &&
        item.Project_type.toLowerCase().includes(filters.type) &&
        item.Project_area.toLowerCase().includes(filters.area) &&
        item.Langauge.toLowerCase().includes(filters.language) &&
        item.Internal_guide.toLowerCase().includes(filters.professor)
    );

    setData(out);
  };

  // NOTE:  calling the function
  useEffect(() => {
    // getMyPostData();
    window.scrollTo(0, 0);

    axios
      .all([res, res2])
      .then(
        axios.spread((...responses) => {
          // console.log(responses)
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responseData = [...responseOne.data, ...responseTwo.data];

          setMyData(responseOne.data);
          setMyData2(responseTwo.data);
         
          const filters3 = {
            search2: fname.toLowerCase(),
          };
      
          // console.log(getSearch);
      
          const searchdata2 = responseData.filter(
            (item) =>
            item.Internal_guide.toLowerCase().includes(filters3.search2) 
          );
          setOriginalData(searchdata2); 
          setData(searchdata2);

        })
      )
      .catch((error) => setIsError(error.message));
  }, [fname]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/blog/bg.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">All Projects
            </h3>
            <div className="text-center subcribe-form mt-4 pt-2">
            <form
                onSubmit={(e) => handlesearchsubmit(e)}
                className="relative mx-auto max-w-xl"
              >
                <input
                  type="text"
                  id="help"
                  className=" input ltr:pr-40 rtl:pl-40 pb-4 ltr:pl-6 rtl:pr-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700"
                  placeholder="Search your questions or topic..."
                  name="search"
                  value={search}
                  onChange={handlesearch}
                />
                <button
                  type="button"
                  onClick={handlesearchsubmit}
                  className="btn absolute top-[2px] ltr:right-[3px] rtl:left-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full searchButton"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>


      </section>
      <div className="relative">
        <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>


      {isError !== "" && <h2>{isError}</h2>}
      <div className="container md:mt-24 mt-16 mb-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {currentItems &&
            currentItems.map((post) => {
              const {
                Batch,
                id,
                Project_id,
                Project_name,
                Abstract,
                Project_area,
                Langauge,
                Leader_enroll,
                Leader_name,
                Leader_email,
                Internal_guide,
                Preview_URL,
              } = post;
              return (
                <div
                  className="group relative rounded hover:-mt-1 shadow hover:shadow-md dark:shadow-gray-800 overflow-hidden transition-all duration-300"
                  key={id}
                >
                  <div style={{"height":"234px","display": "flex",
"justify-content": "center",
"align-items": "center"}} className="relative  overflow-hidden">
                    <img  style={{"height":"234px"}} src={Preview_URL} alt="" />

                    <div className="absolute p-4 right-0 left-0 text-center bg-slate-900/80 -bottom-24 group-hover:bottom-0 transition-all duration-300">
                      <Link to={`/details/${Batch}/${id}`}>
                        <a className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">
                          View More
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="p-4">
                    <Link
                      to={`/details/${Batch}/${id}`}
                      className="text-indigo-600  hover:text-indigo-600 text-3xl font-semibold"
                    >
                      {Project_name}
                    </Link>
                    <div className="flex flex-col text-slate-500 mt-2">
                      <div className="text-base text-left">Batch : {Batch}</div>
                      <div className="text-base text-left">
                        Project Area :{Project_area}
                      </div>
                      <div className="text-base text-left">Langauge : {Langauge}</div>
                      <div className="text-base text-left">
                        Internal_guide : {Internal_guide}
                      </div>
                    </div>
                    <p className=" mt-2 text-start">{Abstract.slice(0, 200)}</p>

                    <div className=" pr-4 pt-4 pb-4 pl-0  text-start   ">
                      <Link
                        to={`/details/${Batch}/${id}`}
                        className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={
              "member__pagination mt-4 member__pagination--right        default-pagination"
            }
            nextLinkClassName={"pagination__link"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      </div>
    </>
  );
};

export default Project;
