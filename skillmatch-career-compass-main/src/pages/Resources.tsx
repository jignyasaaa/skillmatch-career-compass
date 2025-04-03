
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ResourceCard from '@/components/resources/ResourceCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { learningResources, careerPaths } from '@/data/mockData';
import { Search, Filter, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Resources = () => {
  const location = useLocation();
  const careerId = location.state?.careerId;
  
  const [resources, setResources] = useState(learningResources);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<{
    types: string[];
    levels: string[];
    tags: string[];
  }>({
    types: [],
    levels: [],
    tags: []
  });
  
  // Get unique values for filter options
  const resourceTypes = Array.from(new Set(learningResources.map(r => r.type)));
  const resourceLevels = Array.from(new Set(learningResources.map(r => r.level)));
  const resourceTags = Array.from(
    new Set(learningResources.flatMap(r => r.tags))
  ).sort();
  
  // If careerId is provided, pre-filter resources
  useEffect(() => {
    if (careerId) {
      const career = careerPaths.find(c => c.id === careerId);
      if (career) {
        // Find resources that match career skills
        const careerSkills = career.skills.map(skill => skill.toLowerCase());
        
        // Pre-select these skills as tag filters
        setFilters(prev => ({
          ...prev,
          tags: careerSkills
        }));
      }
    }
  }, [careerId]);
  
  // Apply filters and search
  useEffect(() => {
    let filteredResources = learningResources;
    
    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredResources = filteredResources.filter(
        r => r.title.toLowerCase().includes(term) || 
          r.description.toLowerCase().includes(term) ||
          r.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    // Apply type filters
    if (filters.types.length > 0) {
      filteredResources = filteredResources.filter(r => 
        filters.types.includes(r.type)
      );
    }
    
    // Apply level filters
    if (filters.levels.length > 0) {
      filteredResources = filteredResources.filter(r => 
        filters.levels.includes(r.level)
      );
    }
    
    // Apply tag filters
    if (filters.tags.length > 0) {
      filteredResources = filteredResources.filter(r => 
        r.tags.some(tag => 
          filters.tags.some(filterTag => 
            tag.toLowerCase().includes(filterTag.toLowerCase())
          )
        )
      );
    }
    
    setResources(filteredResources);
  }, [searchTerm, filters]);
  
  // Toggle a filter value
  const toggleFilter = (type: 'types' | 'levels' | 'tags', value: string) => {
    setFilters(prev => {
      const isSelected = prev[type].includes(value);
      if (isSelected) {
        return {
          ...prev,
          [type]: prev[type].filter(v => v !== value)
        };
      } else {
        return {
          ...prev,
          [type]: [...prev[type], value]
        };
      }
    });
  };
  
  // Clear all filters
  const clearFilters = () => {
    setFilters({
      types: [],
      levels: [],
      tags: []
    });
    setSearchTerm('');
  };
  
  // Check if any filters are applied
  const hasActiveFilters = 
    filters.types.length > 0 || 
    filters.levels.length > 0 || 
    filters.tags.length > 0 || 
    searchTerm !== '';

  return (
    <Layout>
      <div className="bg-gradient-to-b from-skillteal-light/30 to-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Learning Resources</h1>
          <p className="text-gray-600 max-w-2xl">
            Discover courses, tutorials, and learning materials to help you develop the skills needed for your desired career path.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <Card>
              <CardHeader className="px-4 py-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Filters</CardTitle>
                  {hasActiveFilters && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={clearFilters}
                      className="h-8 text-xs flex items-center gap-1"
                    >
                      <X className="h-3.5 w-3.5" /> Clear all
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="px-4 py-0 space-y-6">
                {/* Resource Type Filter */}
                <div>
                  <h3 className="font-medium text-sm mb-2">Resource Type</h3>
                  <div className="space-y-1.5">
                    {resourceTypes.map(type => (
                      <div key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`type-${type}`}
                          className="mr-2"
                          checked={filters.types.includes(type)}
                          onChange={() => toggleFilter('types', type)}
                        />
                        <label htmlFor={`type-${type}`} className="text-sm">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Level Filter */}
                <div>
                  <h3 className="font-medium text-sm mb-2">Level</h3>
                  <div className="space-y-1.5">
                    {resourceLevels.map(level => (
                      <div key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`level-${level}`}
                          className="mr-2"
                          checked={filters.levels.includes(level)}
                          onChange={() => toggleFilter('levels', level)}
                        />
                        <label htmlFor={`level-${level}`} className="text-sm">
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Popular Tags Filter */}
                <div>
                  <h3 className="font-medium text-sm mb-2">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {resourceTags.slice(0, 12).map(tag => (
                      <Badge
                        key={tag}
                        variant={filters.tags.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          filters.tags.includes(tag) 
                            ? "bg-skillteal hover:bg-skillteal-dark" 
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                        onClick={() => toggleFilter('tags', tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="flex-grow">
            {/* Search bar */}
            <div className="relative mb-8">
              <Input
                type="text"
                placeholder="Search for resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              
              {/* Active filters */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mt-4 items-center">
                  <span className="text-sm text-gray-500">Active filters:</span>
                  {searchTerm && (
                    <Badge 
                      variant="outline" 
                      className="bg-gray-100 flex items-center gap-1"
                    >
                      <span>Search: {searchTerm}</span>
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => setSearchTerm('')}
                      />
                    </Badge>
                  )}
                  {[...filters.types, ...filters.levels, ...filters.tags].map(filter => (
                    <Badge 
                      key={filter} 
                      variant="outline" 
                      className="bg-gray-100 flex items-center gap-1"
                    >
                      <span>{filter}</span>
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => {
                          if (filters.types.includes(filter)) {
                            toggleFilter('types', filter);
                          } else if (filters.levels.includes(filter)) {
                            toggleFilter('levels', filter);
                          } else {
                            toggleFilter('tags', filter);
                          }
                        }}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            
            {/* Results */}
            {resources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map(resource => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <Filter className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No resources found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search term to find more resources.
                </p>
                <Button onClick={clearFilters}>Clear all filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
