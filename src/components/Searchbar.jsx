import { useState, useRef, useEffect } from 'react';
import { Search, Calendar, Mountain, Users, Star, Clock, MapPin, Filter } from 'lucide-react';

const Searchbar = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    // Comprehensive trek data structure
    const trekCategories = {
        months: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        difficulty: [
            'Easy', 'Easy - Moderate', 'Moderate', 'Moderate - Difficult', 'Difficult'
        ],
        specialTreks: [
            'Family Treks', 'Stargazing Treks', 'Senior Treks', 'Adventure Therapy', 'Summer Camps'
        ],
        seasons: [
            'Spring', 'Summer', 'Monsoon', 'Autumn', 'Winter'
        ],
        duration: [
            '2 days', '3 days', '4 days', '5 days', '6 days', '7+ days'
        ],
        regions: [
            'Uttarakhand', 'Himachal Pradesh', 'Lahaul and Spiti', 'Jammu & Kashmir',
            'Sikkim', 'West Bengal', 'Chhattisgarh', 'Madhya Pradesh', 'Karnataka',
            'Tamil Nadu', 'Nepal', 'Georgia', 'Indonesia'
        ]
    };

    // Parse search query and extract filters
    const parseSearchQuery = (query) => {
        const filters = {
            difficulty: [],
            months: [],
            seasons: [],
            duration: [],
            regions: [],
            specialTreks: [],
            keywords: []
        };

        const words = query.toLowerCase().split(' ').filter(word => word.length > 0);

        words.forEach(word => {
            // Check difficulty
            const difficultyMatch = trekCategories.difficulty.find(d =>
                d.toLowerCase().includes(word) || word.includes(d.toLowerCase().replace(' - ', '-').replace(' ', ''))
            );
            if (difficultyMatch) {
                filters.difficulty.push(difficultyMatch);
                return;
            }

            // Check months
            const monthMatch = trekCategories.months.find(m =>
                m.toLowerCase().includes(word) || word.includes(m.toLowerCase())
            );
            if (monthMatch) {
                filters.months.push(monthMatch);
                return;
            }

            // Check seasons
            const seasonMatch = trekCategories.seasons.find(s =>
                s.toLowerCase().includes(word)
            );
            if (seasonMatch) {
                filters.seasons.push(seasonMatch);
                return;
            }

            // Check duration
            const durationMatch = trekCategories.duration.find(d =>
                d.toLowerCase().includes(word) || word.includes(d.toLowerCase().replace(' days', '').replace('+', 'plus'))
            );
            if (durationMatch) {
                filters.duration.push(durationMatch);
                return;
            }

            // Check regions
            const regionMatch = trekCategories.regions.find(r =>
                r.toLowerCase().includes(word) || word.includes(r.toLowerCase().replace(' & ', ' ').replace(' and ', ' '))
            );
            if (regionMatch) {
                filters.regions.push(regionMatch);
                return;
            }

            // Check special treks
            const specialMatch = trekCategories.specialTreks.find(s =>
                s.toLowerCase().includes(word) || word.includes(s.toLowerCase().replace(' ', ''))
            );
            if (specialMatch) {
                filters.specialTreks.push(specialMatch);
                return;
            }

            // Add to keywords if not matched
            filters.keywords.push(word);
        });

        return filters;
    };

    // Generate all possible search options
    const generateAllSearchOptions = () => {
        const options = [];

        // Add months
        trekCategories.months.forEach(month => {
            options.push({
                type: 'month',
                title: `${month} Treks`,
                description: `Discover amazing treks available in ${month}`,
                icon: Calendar,
                category: 'Month',
                searchKey: month.toLowerCase()
            });
        });

        // Add difficulty levels
        trekCategories.difficulty.forEach(diff => {
            options.push({
                type: 'difficulty',
                title: `${diff} Treks`,
                description: `Explore ${diff.toLowerCase()} trekking routes perfect for your skill level`,
                icon: Mountain,
                category: 'Difficulty',
                searchKey: diff.toLowerCase()
            });
        });

        // Add special treks
        trekCategories.specialTreks.forEach(special => {
            options.push({
                type: 'special',
                title: `${special}`,
                description: `Specialized trekking experiences for ${special.toLowerCase()}`,
                icon: Users,
                category: 'Special Experience',
                searchKey: special.toLowerCase()
            });
        });

        // Add seasons
        trekCategories.seasons.forEach(season => {
            options.push({
                type: 'season',
                title: `${season} Treks`,
                description: `Experience the beauty of ${season.toLowerCase()} trekking`,
                icon: Star,
                category: 'Season',
                searchKey: season.toLowerCase()
            });
        });

        // Add duration
        trekCategories.duration.forEach(duration => {
            options.push({
                type: 'duration',
                title: `${duration} Treks`,
                description: `Find perfect ${duration} trekking adventures`,
                icon: Clock,
                category: 'Duration',
                searchKey: duration.toLowerCase()
            });
        });

        // Add regions
        trekCategories.regions.forEach(region => {
            options.push({
                type: 'region',
                title: `${region} Treks`,
                description: `Explore breathtaking trails in ${region}`,
                icon: MapPin,
                category: 'Region',
                searchKey: region.toLowerCase()
            });
        });

        return options;
    };

    // Filter options based on search query
    const filterSearchOptions = (options, query) => {
        if (!query.trim()) return options.slice(0, 10); // Show first 10 when no query

        const searchTerm = query.toLowerCase().trim();
        const filtered = options.filter(option =>
            option.searchKey.includes(searchTerm) ||
            option.title.toLowerCase().includes(searchTerm) ||
            option.category.toLowerCase().includes(searchTerm)
        );

        return filtered.slice(0, 8); // Limit to 8 results
    };

    // Handle search input changes with debouncing
    const handleSearchInput = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Debounce the filtering
        clearTimeout(window.searchDebounce);
        window.searchDebounce = setTimeout(() => {
            const allOptions = generateAllSearchOptions();
            const filteredResults = filterSearchOptions(allOptions, query);
            setSearchResults(filteredResults);
        }, 150); // 150ms debounce
    };

    // Handle click outside to close spotlight
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsFocused(false);
                // Clear any pending debounce
                if (window.searchDebounce) {
                    clearTimeout(window.searchDebounce);
                }
            }
        };

        if (isFocused) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';

            // Stop Lenis smooth scrolling
            if (window.lenisInstance) {
                window.lenisInstance.stop();
            }
        } else {
            document.body.style.overflow = '';

            // Resume Lenis smooth scrolling
            if (window.lenisInstance) {
                window.lenisInstance.start();
            }
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            // Restore body scrolling
            document.body.style.overflow = '';
            // Clear debounce on unmount
            if (window.searchDebounce) {
                clearTimeout(window.searchDebounce);
            }
            // Resume Lenis on unmount
            if (window.lenisInstance) {
                window.lenisInstance.start();
            }
        };
    }, [isFocused]);

    // Initialize search results on component mount
    useEffect(() => {
        const allOptions = generateAllSearchOptions();
        const initialResults = filterSearchOptions(allOptions, '');
        setSearchResults(initialResults);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFocus = () => {
        setIsFocused(true);
        // Show all options when focused
        const allOptions = generateAllSearchOptions();
        const initialResults = filterSearchOptions(allOptions, '');
        setSearchResults(initialResults);
        // Focus the input immediately
        setTimeout(() => inputRef.current?.focus(), 50);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Advanced search for:', searchQuery);
        console.log('Parsed filters:', parseSearchQuery(searchQuery));
        setIsFocused(false);
    };

    const handleResultClick = (result) => {
        console.log('Selected result:', result);
        setSearchQuery(result.title);
        setIsFocused(false);
    };

    return (
        <>
            {/* Spotlight Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 pointer-events-none ${
                    isFocused ? 'opacity-100' : 'opacity-0'
                }`}
            />

            {/* Spotlight Search Container - responsive positioning */}
            <div
                ref={searchRef}
                className={`fixed left-1/2 z-50 transition-all duration-300 ease-out ${
                    isFocused
                        ? 'top-20 sm:top-32 scale-95 sm:scale-110 opacity-100 translate-y-0 -translate-x-1/2'
                        : 'top-20 scale-100 opacity-0 pointer-events-none -translate-y-4 -translate-x-1/2'
                }`}
            >
                <form onSubmit={handleSearch} className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
                    <div className="search-container-spotlight">
                        <div className="search-bar-spotlight">
                            <input
                                ref={inputRef}
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchInput}
                                placeholder="Search treks by difficulty, month, region, duration..."
                                className="search-input-spotlight text-sm sm:text-base"
                            />
                            <div className="search-icon-spotlight">
                                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                            </div>
                        </div>
                        <div className="glow-spotlight"></div>
                    </div>

                    {/* Search Results Dropdown - responsive width and positioning */}
                    <div className="absolute top-full mt-2 w-full bg-gray-900/95 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-2xl overflow-visible z-60 max-h-[60vh] sm:max-h-96">
                            <div
                                ref={dropdownRef}
                                className="max-h-96 overflow-y-auto overscroll-contain"
                                style={{
                                    scrollbarWidth: 'thin',
                                    scrollbarColor: '#4B5563 transparent',
                                    WebkitOverflowScrolling: 'touch',
                                    touchAction: 'pan-y',
                                    willChange: 'transform'
                                }}
                                onWheel={(e) => {
                                    // Don't stop propagation, let it scroll naturally
                                    e.stopPropagation();
                                }}
                                onTouchMove={(e) => {
                                    e.stopPropagation();
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.scrollbarColor = '#6B7280 transparent';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.scrollbarColor = '#4B5563 transparent';
                                }}
                            >
                                {searchResults.map((result, index) => {
                                    const IconComponent = result.icon;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleResultClick(result)}
                                            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left hover:bg-gray-800/50 transition-colors duration-200 border-b border-gray-700/30 last:border-b-0 group"
                                        >
                                            <div className="flex items-center gap-3 sm:gap-4">
                                                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-linear-to-br from-[#EFB71A]/20 to-[#0CE88C]/20 flex items-center justify-center group-hover:from-[#EFB71A]/30 group-hover:to-[#0CE88C]/30 transition-all duration-200">
                                                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#EFB71A] group-hover:text-white transition-colors duration-200" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                        <h3 className="font-elms font-semibold text-white group-hover:text-[#EFB71A] transition-colors duration-200 text-sm sm:text-base truncate">
                                                            {result.title}
                                                        </h3>
                                                        <span className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full shrink-0">
                                                            {result.category}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200 line-clamp-2">
                                                        {result.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800/50 border-t border-gray-700/30">
                                <p className="text-xs text-gray-500 text-center">
                                    Press Enter to search or click on a result
                                </p>
                            </div>
                        </div>
                </form>
            </div>

            {/* Original Searchbar - hidden when focused */}
            <div className={`search-container transition-opacity duration-300 ${isFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        onFocus={handleFocus}
                        readOnly
                    />
                    <div className="search-icon">
                        <Search className="w-6 h-6 text-gray-400" />
                    </div>
                </div>
                <div className="glow"></div>
            </div>
        </>
    );
};

export default Searchbar;