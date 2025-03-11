import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";

interface BlogListHeaderProps {
  category: string;
  setCategory: (value: string) => void;
  setSearch: (value: string) => void;
}

const BlogListHeader: FC<BlogListHeaderProps> = ({
  category,
  setCategory,
  setSearch,
}) => {
  return (
    <section className="max-w-[40%] flex gap-4 mt-11">
      <Input
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">All</SelectItem>
          <SelectItem value="food">Food</SelectItem>
          <SelectItem value="tips">Tips</SelectItem>
          <SelectItem value="life">Life</SelectItem>
          <SelectItem value="book">Book</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
};

export default BlogListHeader;
