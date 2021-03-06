import "./code-editor.css";
import "./code-cell.css";
import { useState, useEffect, useRef } from "react";
import React from "react";

import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";
import { Cell } from "../state";
import { useActions } from "../hooks/use-action";
import { useTypedSelector } from "../hooks/use-typed-selector";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  // const cumulativeCode = useTypedSelector((state) => {
  //   const { data, order } = state.cells;
  //   const orderedCells = order.map((id) => data[id]);

  //   const cumulativeCode = [
  //     `
  //       import _React from 'react';
  //       import _ReactDOM from 'react-dom';
  //       const show = (value) => {
  //         const root = document.querySelector('#root');

  //         if (typeof value === 'object') {
  //           if (value.$$typeof && value.props) {
  //             _ReactDOM.render(value, root);
  //           } else {
  //             root.innerHTML = JSON.stringify(value);
  //           }
  //         } else {
  //           root.innerHTML = value;
  //         }
  //       };
  //     `,
  //   ];
  //   for (let c of orderedCells) {
  //     if (c.type === "code") {
  //       cumulativeCode.push(c.content);
  //     }
  //     if (c.id === cell.id) {
  //       break;
  //     }
  //   }
  //   return cumulativeCode;
  // });
  const cumulativeCode = [
    `
        import _React from 'react';
        import _ReactDOM from 'react-dom';
        const show = (value) => {
          const root = document.querySelector('#root');

          if (typeof value === 'object') {
            if (value.$$typeof && value.props) {
              _ReactDOM.render(value, root);
            } else {
              root.innerHTML = JSON.stringify(value);
            }
          } else {
            root.innerHTML = value;
          }
        };
      `,
  ];

  cumulativeCode.push(cell.content);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode.join("\n"));
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode.join("\n"));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content, cell.id, createBundle]);

  // const onClick = async () => {
  //   const output = await bundle(input);
  //   setCode(output);
  // };

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        {!bundle || bundle.loading ? (
          <div className="progress-cover">
            <progress className="progress is-small is-primary" max="100">
              Loading
            </progress>
          </div>
        ) : (
          <Preview code={bundle.code} err={bundle.err} />
        )}
      </div>
    </Resizable>
  );
};

export default CodeCell;
