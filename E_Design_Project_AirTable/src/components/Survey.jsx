import React, { useEffect, useState } from "react";
import { Title, base } from "./index";
import styled from "styled-components";
import { FaVoteYea } from "react-icons/fa";

export default function Survey() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecords = async () => {
    setLoading(true);
    const records = await base("survey")
      .select({})
      .firstPage()
      .catch((error) => console.log(error));

    const newItems = records.map((record) => ({
      id: record.id,
      fields: record.fields,
    }));
    setItems(newItems);
    setLoading(false);
  };

  //-------------------------------------------- method 1 from John
  // const giveVote = async (id) => {
  //   setLoading(true);
  //   const updatedItems = [...items].map((item) => {
  //     if (item.id === id) {
  //       return {
  //         id,
  //         fields: { ...item.fields, votes: item.fields.votes + 1 },
  //       };
  //     } else {
  //       return item;
  //     }
  //   });

  //   const updatedRecords = await base("survey")
  //     .update(updatedItems)
  //     .catch((error) => console.log(error));

  //   const newItems = updatedItems.map((record) => ({
  //     id: record.id,
  //     fields: record.fields,
  //   }));

  //   setItems(newItems);
  //   setLoading(false);
  // };

  //-------------------------------------------- method 2 from Me

  // const giveVote = async (id) => {
  //   setLoading(true);
  //   const updatedItems = [...items].map((item) => {
  //     if (item.id === id) {
  //       return {
  //         id,
  //         fields: { ...item.fields, votes: item.fields.votes + 1 },
  //       };
  //     } else {
  //       return item;
  //     }
  //   });

  //   const updatedRecords = await base("survey")
  //     .update(updatedItems)
  //     .catch((error) => console.log(error));
  //   getRecords();
  // };

  //--------------------------------------------
  /*
   * Method 3 from Me + reading Airtable docs:
   * Send as update, only the item to be updated,
   * not the whole items
   */
  const giveVote = async (id) => {
    setLoading(true);
    let itemToUpdate = items.find((item) => item.id === id);
    itemToUpdate = {
      ...itemToUpdate,
      fields: {
        ...itemToUpdate.fields,
        votes: itemToUpdate.fields.votes + 1,
      },
    };

    const updatedRecord = await base("survey")
      .update([itemToUpdate])
      .catch((error) => console.log(error));

    getRecords();
  };

  //---------------------------------------------

  useEffect(() => {
    getRecords();
  }, []);

  // console.log(items);

  return (
    <Wrapper className="section">
      <div className="container">
        <Title title={"survey"} />
        <h3>most import room in the house ?</h3>

        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <div className="key">
                {item.fields.name.toUpperCase().substring(0, 2)}
              </div>
              <div>
                <h4>{item.fields.name}</h4>
                <p>{item.fields.votes}</p>
              </div>
              <button disabled={loading} onClick={() => giveVote(item.id)}>
                {" "}
                <FaVoteYea />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .container {
    width: 90vw;
    max-width: var(--max-width);

    margin: 0 auto;
    h3 {
      text-align: center;
      color: var(--clr-grey-5);
      margin-bottom: 4rem;
    }
    ul {
      margin-top: 2rem;
      display: grid;
      gap: 2rem;
      grid-gap: 2rem;
      @media (min-width: 992px) {
        & {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (min-width: 1200px) {
        & {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    }
    li {
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      padding: 0.75rem 1rem;
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 0 3rem;
      grid-gap: 0 3rem;
      align-items: center;
      .key {
        color: var(--clr-white);
        font-size: 1.5rem;
        background: var(--clr-primary-7);
        padding: 0.5rem 1rem;
        border-radius: var(--radius);
      }
      p {
        margin-bottom: 0;
        color: var(--clr-grey-5);
        letter-spacing: var(--spacing);
      }
      h4 {
        margin-bottom: 0;
      }
      button {
        background: transparent;
        border-color: transparent;
        font-size: 2rem;
        cursor: pointer;
        color: var(--clr-black);
      }
      button:disabled {
        color: var(--clr-grey-6);
        cursor: not-allowed;
      }
    }
  }
`;
