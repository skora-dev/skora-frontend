"use client";
import { Table } from "antd";
import { ReportTableProps, SubjectResult } from "../types/studentTypes";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import EditSubj from "./EditSubj";
const ReportTable = ({ data }: ReportTableProps) => {
  const [showEdit, setShowEdit] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<SubjectResult | null>(
    null,
  );
  const columns = [
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "CA",
      dataIndex: "caScore",
      key: "ca",
    },
    {
      title: "Exam",
      dataIndex: "examScore",
      key: "exam",
    },
    {
      title: "Total",
      dataIndex: "overall",
      key: "overall",
    },
    {
      title: "Pass Mark",
      dataIndex: "passMark",
      key: "pass",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: "Pass" | "Fail") => (
        <span
          className={`font-semibold ${
            status === "Pass" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: SubjectResult) => (
        <div className="flex items-center gap-2 text-xs">
          <Pencil
            size={16}
            className="cursor-pointer text-green-600"
            onClick={() => {
              setShowEdit(true);
              setSelectedSubject(record);
            }}
          />
          <Trash2
            size={16}
            className="cursor-pointer text-red-400"
            onClick={() => console.log("Delete", record)}
          />
        </div>
      ),
    },
  ];
  return (
    <article>
      <Table dataSource={data} columns={columns} />
      {showEdit && selectedSubject && (
        <EditSubj
          defaultValues={selectedSubject}
          onClose={() => setShowEdit(false)}
          onSubmitData={() => console.log("l")}
        />
      )}
    </article>
  );
};

export default ReportTable;
