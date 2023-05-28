import { BsPencil } from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import styles from "../styles/editor.module.scss";
import { changePageName, createPage, deletePage, selectPage } from '@store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/store';
import Image from 'next/image';
import { FormEvent, useState } from 'react';


export default function PanelLeft() {
  const pages = useSelector((state: RootState) => state.pages.page);
  const selectedPage = useSelector((state: RootState) => state.selectedPage);
  const dispatch = useDispatch();

  const [isEditing, setEditing] = useState(false);

  const handlePenIconClick = () => {
    setEditing(!isEditing);
  };

  const handlePageCreate = () => {
    dispatch(createPage());
  };
  const handlePageSelect = (pageId: string) => {
    dispatch(selectPage(pageId));
  };
  const handlePageDelete = (pageId: string) => {
    dispatch(deletePage(pageId));
  };

  const handleBlur = (event:FormEvent<HTMLInputElement>) => {
    if(selectedPage){
      dispatch(changePageName(selectedPage?.id, (event.target as HTMLInputElement).value));
    }
    setEditing(false);
  };

  return (
    <section className={styles.panelLeft}>

      <div className={styles.panelHead}>
        <div className={styles.panelHeadTitle}>
         {isEditing ? <input type="text" placeholder={selectedPage?.name || ''} onBlur={handleBlur} /> : (selectedPage?.name || '')}
          <BsPencil
                className={isEditing ? styles.active : ''}
                onClick={handlePenIconClick}
          ></BsPencil>
        </div>
        <div className={styles.panelHeadBtn}>
          <BsFillPlusSquareFill onClick={() => handlePageCreate()}></BsFillPlusSquareFill>
          {selectedPage ? <BsFillTrash3Fill onClick={() => handlePageDelete(selectedPage.id)}></BsFillTrash3Fill> : 
          <BsFillTrash3Fill className={styles.inactive}></BsFillTrash3Fill>}
        </div>
      </div>

      <div className={styles.panelBody}>
        {pages.map((page,idx) => (
          <div 
            key={page.id} 
            className={`${styles.pageThumbnailWrapper} ${selectedPage?.id === page.id ? styles.activeItem : ''}`}
            onClick={() => handlePageSelect(page.id)}
          >
            <p>{idx}</p>
            <div>
            <p>{page.name}</p>
            { page.thumbnail ? 
              <Image
                src={page.thumbnail || ''}
                alt={page.name}
                className={styles.pageImage}
                width={100}
                height={24}
                priority
              ></Image> :
              <div className={styles.emptyImage}></div>
              }
          </div>
          </div>

        ))}
      </div>

      <hr className={styles.panelHr} />

      <div className={styles.panelHead}>
        <div className={styles.panelHeadTitle}>
          Components
        </div>
      </div>

      <div className={styles.panelBody}>
        [componentTree]
      </div>

    </section>
  )
}