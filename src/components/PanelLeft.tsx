import { BsPencil } from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import styles from "../styles/editor.module.scss";
import { changePageName, createPage, deletePage, saveSelectedPage, selectPage } from '@store/actions/page.actions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/store';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { Page } from '../shared/redux/models/page.model';


export default function PanelLeft() {
  const pages = useSelector((state: RootState) => state.page.pages);
  const selectedPage = useSelector((state: RootState) => state.selectedPage.page);
  const dispatch = useDispatch();

  const [isEditing, setEditing] = useState(false);

  const handlePenIconClick = () => {
    setEditing(!isEditing);
  };

  const handlePageCreate = () => {
    dispatch(createPage());
  };
  const handlePageSelect = (page: Page) => {
    selectedPage && dispatch(saveSelectedPage(selectedPage));
    dispatch(selectPage(page));
  };
  const handlePageDelete = (pageId: string) => {
    dispatch(deletePage(pageId));
  };

  const handleBlur = (event: FormEvent<HTMLInputElement>) => {
    if (selectedPage) {
      dispatch(changePageName((event.target as HTMLInputElement).value));
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
        {pages.map((item, idx) => {

          const page = (item.id === selectedPage?.id) ? selectedPage : item;

          return <div
            key={page.id}
            className={`${styles.pageThumbnailWrapper} ${selectedPage?.id === page.id ? styles.activeItem : ''}`}
            onClick={() => handlePageSelect(page)}
          >
            <p>{idx}</p>
            <div>
              <p>{page.name}</p>
              {page.thumbnail ?
                <Image
                  src={page.thumbnail || ''} alt={page.name}
                  className={styles.pageImage}
                  priority
                ></Image> :
                <div className={styles.emptyImage}></div>
              }
            </div>
          </div>

            })}
      </div>

      <div className={styles.panelHead}>
        <div className={styles.panelHeadTitle}>
          Components
        </div>
      </div>

      <div className={styles.panelBody}>
        <ul>
          {selectedPage?.elements.map((element) => (
          <li key={element.code}>{element.name}&nbsp;<span className={styles.mutedText}>{element.data.type}</span></li>
          ))}
        </ul>
      </div>

    </section>
  )
}